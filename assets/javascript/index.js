//Preto, branco e amarelo

(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast_preto_branco_amarelo',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();

//inverter as cores

(function () {
    var Contrastinverter = {
        storage: 'contrastState',
        cssClass: 'contrast_inverter_cor',
        currentState: null,
        check: checkContrastinverter,
        getState: getContrastinverterState,
        setState: setContrastinverterState,
        toogle: toogleContrastinverter,
        updateView: updateViewContrastinverter
    };

    window.toggleContrastinverter = function () { Contrastinverter.toogle(); };

    Contrastinverter.check();

    function checkContrastinverter() {
        this.updateView();
    }

    function getContrastinverterState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastinverterState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrastinverter() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrastinverter() {
        this.setState(!this.currentState);
    }
})();

//Preto e branco
(function () {
    var Contrast_preto_branco = {
        storage: 'contrastState',
        cssClass: 'contrast_preto_branco',
        currentState: null,
        check: checkContrast_preto_branco,
        getState: getContrast_preto_brancoState,
        setState: setContrast_preto_brancoState,
        toogle: toogleContrast_preto_branco,
        updateView: updateViewContrast_preto_branco
    };

    window.toggleContrast_preto_branco = function () { Contrast_preto_branco.toogle(); };

    Contrast_preto_branco.check();

    function checkContrast_preto_branco() {
        this.updateView();
    }

    function getContrast_preto_brancoState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrast_preto_brancoState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast_preto_branco() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast_preto_branco() {
        this.setState(!this.currentState);
    }
})();

//Aumentar contraste
(function () {
    var Contrast_aumentar_contraste = {
        storage: 'contrastState',
        cssClass: 'contrast_aumentar_contraste',
        currentState: null,
        check: checkContrast_aumentar_contraste,
        getState: getContrast_aumentar_contrasteState,
        setState: setContrast_aumentar_contrasteState,
        toogle: toogleContrast_aumentar_contraste,
        updateView: updateViewContrast_aumentar_contraste
    };

    window.toggleContrast_aumentar_contraste = function () { Contrast_aumentar_contraste.toogle(); };

    Contrast_aumentar_contraste.check();

    function checkContrast_aumentar_contraste() {
        this.updateView();
    }

    function getContrast_aumentar_contrasteState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrast_aumentar_contrasteState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast_aumentar_contraste() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast_aumentar_contraste() {
        this.setState(!this.currentState);
    }
})();

//Aumentar fonte
(function () {
    var Contrast_aumentar_fonte = {
        storage: 'contrastState',
        cssClass: 'font_aumentar_fonte',
        currentState: null,
        check: checkContrast_aumentar_fonte,
        getState: getContrast_aumentar_fonteState,
        setState: setContrast_aumentar_fonteState,
        toogle: toogleContrast_aumentar_fonte,
        updateView: updateViewContrast_aumentar_fonte
    };

    window.toggleContrast_aumentar_fonte = function () { Contrast_aumentar_fonte.toogle(); };

    Contrast__aumentar_fonte.check();

    function checkContrast_aumentar_fonte() {
        this.updateView();
    }

    function getContrast_aumentar_fonteState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrast_aumentar_fonteState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast_aumentar_fonte() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast_aumentar_fonte() {
        this.setState(!this.currentState);
    }
})();




