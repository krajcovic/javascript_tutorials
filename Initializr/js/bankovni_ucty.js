var bezny, sporici;

function Ucet(cisloUctu) {
    this.cisloUctu = cisloUctu;

    this.zustatek = 0;

    this.vloz = function(castka) {
        if(castka === Number(castka)) {
            this.zustatek += castka;
        }
    };

    this.vratZustatek = function() {
        return this.zustatek;
    };
}

bezny = new Ucet("845029583490258");
bezny.vloz(12.67)
console.log(bezny.vratZustatek());

sporici = new Ucet("845029583490258");
sporici.vloz(1256.33)
console.log(sporici.vratZustatek());

console.log(bezny.toString())