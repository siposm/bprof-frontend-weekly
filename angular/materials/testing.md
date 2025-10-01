# Tesztelés alapok röviden

## Miért tesztelünk? (Célok)

- **Visszajelzés**: gyorsan kiderül, ha egy változtatás mellékhatást okoz.
- **Bizalom a refaktorban**: bátrabban alakítható a kód.
- **Dokumentáció**: a tesztek a komponens/szolgáltatás elvárt viselkedését írják le.
- **Megismételhetőség**: meghatározott környezetben, determinisztikusan futnak.

## Tesztszintek Angularban

- **Egységteszt (unit)**: Izoláltan vizsgálja a kód kis egységeit (függvények, pipe-ok, szolgáltatások). Nem függ Angular keretrendszer-funkcióktól, gyorsan fut.
- **Integrációs teszt**: Több Angular elem együttműködését vizsgálja (komponens a saját sablonjával, dependency injection, router/forms modulok). Ez a leggyakoribb tesztszint Angularban.
- **Végponttól végpontig (E2E)**: A teljes alkalmazást a felhasználói nézőpontból teszteli böngészőben: navigáció, routing, hálózati hívások, DOM-manipulációk. Olyan folyamatokat fed le, mint pl. "bejelentkezés" vagy "kosárba helyezés".

## Mit érdemes tesztelni?

- **Komponensek**: a bemenetek (Input) hatása a működésre, a kimenetek (Output) megfelelő visszajelzése, a DOM változásai, a sablonlogika működése és a hibás állapotok kezelése.
- **Szolgáltatások**: az üzleti logika helyessége, az adatok tárolása vagy gyorsítótárazása (cache), valamint a hibás vagy szélsőséges esetek kezelése.
- **Pipe-ok és direktívák**: a transzformációk pontossága, illetve a host elemre gyakorolt hatások (attribútumok, események) működése.
- **Űrlapok**: a validációk helyessége, a kezdeti értékek beállítása, a hibák megjelenítése és a felhasználói interakciók hatása az állapotra.
- **Routing**: a guardok működése, a resolverek által szolgáltatott adatok, az átirányítások, valamint a paraméterek kezelése.
- **RxJS logika**: az aszinkron adatfolyamok viselkedése, az időzítések működése, a hibakezelés és az újrapróbálkozási (retry) logikák, szükség esetén márka-teszteléssel.

## Tesztelési elvek és jó gyakorlatok

- **Viselkedés-orientált**: a *"mit"* teszteld, ne a *"hogyan"*-t. (Felhasználói szemszög, nem privát mezők.)
- **AAA struktúra**: Arrange – Act – Assert; legyen jól olvasható.
- **Kicsi, fókuszált tesztek**: egy elvárás/ok egy teszten belül; gyors futás.

## Kód lefedettség

A test coverage azt mutatja meg, hogy a kód milyen arányban lett lefedve tesztekkel (pl. sorok, ágak, függvények szintjén). Fontos mérőszám, mert segít azonosítani a teszteletlen részeket, de önmagában nem garantálja a jó minőségű teszteket. Magas lefedettség mellett is lehetnek hibák, ha a tesztek csak "átfutnak" a kódon, de nem ellenőrzik a helyes viselkedést. Érdemes irányértéket (pl. 70–80%) beállítani, de a fókusz mindig a kritikus logika alapos tesztelésén legyen, nem a 100%-os szám hajszolásán.

## Test double eszköztár

| Típus | Rövid leírás | Mire használjuk | Példa |
|-------|--------------|-----------------|-------|
| **Dummy** | Csak "helykitöltő", nincs valódi logika. | Amikor kell egy objektum a metódus szignatúrához, de a tesztben nem használjuk. | Üres `User` objektum, amit átadsz egy függvénynek, de a tesztben nincs rá szükség. |
| **Stub** | Előre beállított válaszokat ad, nem reagál a hívásokra dinamikusan. | Ha az adott függvény/komponens kimenete kell a teszthez, de nem akarjuk a valódi logikát futtatni. | Egy `HttpService.get()` mindig fix JSON-t ad vissza. |
| **Fake** | Egyszerűsített, működő implementáció. | Ha szeretnél logikát, de "könnyített" formában, külső függőség nélkül. | In-memory adatbázis az igazi DB helyett. |
| **Spy** | Megfigyeli, hogyan hívták (hányszor, milyen paraméterekkel), opcionálisan válaszokat is adhat. | Ha ellenőrizni akarod, hogy egy függvényt valóban meghívtak-e. | Jasmine `spyOn(service, "save")`. |
| **Mock** | Előre beállított elvárásokkal rendelkező helyettesítő. Ha a kód eltér ettől, a teszt elbukik. | Viselkedés ellenőrzése (behavior verification). | Egy mockolt API kliens, amelyet kötelező pontosan így meghívni: `POST /login`. |

## Főbb eszközök és környezet

### Tesztfuttatók és keretrendszerek

#### Jasmine

Egy **JavaScript tesztelési keretrendszer** (testing framework), amely biztosítja a **tesztelési nyelvet és logikát**, amivel megfogalmazzuk, hogy mit várunk a kódtól.

- **Szintaxis**: olvasható, BDD (Behavior-Driven Development) stílusú – `describe()`, `it()`, `expect()`.
- **Assertion (állítások)**: beépített matcher-ek (`toBe`, `toEqual`, `toContain`, stb.).
- **Spy-ok**: függvények/módszerek "megfigyelése" (hány hívás, milyen paraméterekkel).
- **Async támogatás**: `done()` callback, Promise/async-await integráció, vagy Angularban a `fakeAsync` és `tick`.

#### Karma

Egy **tesztfuttató környezet** (test runner), amit a Google fejlesztett. Felfogható "motorháztető alatti motor"-ként is, ami felállítja a tesztkörnyezetet, böngészőt indít, futtatja a teszteket és összegyűjti az eredményeket.

- **Fő szerep**: böngészőben futtatja a Jasmine-tesztek kódját.
- **Integráció**: Angular CLI projektekben alapból Karma van beállítva, így ha `ng test`-et futtatsz, Karma indítja a böngészőt és futtatja benne a teszteket.
- **Támogatott böngészők**: Chrome, Firefox, Edge, akár headless módban is (CI környezetben).
- **Kimenet**: a futtatott tesztek eredménye (zöld/piros), valamint coverage riport, ha bekapcsoljuk.
- **Plugin rendszer**: riporterek (pl. progress, spec, HTML), böngésző launcherek, coverage mérések.

### Angular teszt API-k

- **TestBed**: Angular moduláris tesztkörnyezet, DI, deklarációk, providerek beállítása.
- **ComponentFixture**: komponens példány + template + change detection kezelése.
- **HttpTestingController**: HttpClient hívások ellenőrzött stubolása.
- **RouterTestingModule, NoopAnimationsModule**: integrációs tesztekhez.
- **Angular Material Harness-ek**: stabil, hozzáférhetőségi szempontból is barátságos komponens-lekérdezés.
