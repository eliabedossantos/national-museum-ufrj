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

//Preto e branco invertido
(function () {
    var Contrast_preto_branco_invertida = {
        storage: 'contrastState',
        cssClass: 'contrast_preto_branco_invertida',
        currentState: null,
        check: checkContrast_preto_branco_invertida,
        getState: getContrast_preto_branco_invertidaState,
        setState: setContrast_preto_branco_invertidaState,
        toogle: toogleContrast_preto_branco_invertida,
        updateView: updateViewContrast_preto_branco_invertida
    };

    window.toggleContrast_preto_branco_invertida = function () { Contrast_preto_branco_invertida.toogle(); };

    Contrast_preto_branco_invertida.check();

    function checkContrast_preto_branco_invertida() {
        this.updateView();
    }

    function getContrast_preto_branco_invertidaState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrast_preto_branco_invertidaState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast_preto_branco_invertida() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast_preto_branco_invertida() {
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
//x1
(function () {
    var Font_aumentar_fontex1 = {
        storage: 'fontstState',
        cssClass: 'font_aumentar_fontex1',
        currentState: null,
        check: checkFont_aumentar_fontex1,
        getState: getFont_aumentar_fontex1State,
        setState: setFont_aumentar_fontex1State,
        toogle: toogleFont_aumentar_fontex1,
        updateView: updateViewFont_aumentar_fontex1
    };

    window.toggleFont_aumentar_fontex1 = function () { Font_aumentar_fontex1.toogle(); };

    Font_aumentar_fontex1.check();

    function checkFont_aumentar_fontex1() {
        this.updateView();
    }

    function getFont_aumentar_fontex1State() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setFont_aumentar_fontex1State(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewFont_aumentar_fontex1() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleFont_aumentar_fontex1() {
        this.setState(!this.currentState);
    }
})();

//x2
(function () {
    var Font_aumentar_fontex2 = {
        storage: 'fontstState',
        cssClass: 'font_aumentar_fontex2',
        currentState: null,
        check: checkFont_aumentar_fontex2,
        getState: getFont_aumentar_fontex2State,
        setState: setFont_aumentar_fontex2State,
        toogle: toogleFont_aumentar_fontex2,
        updateView: updateViewFont_aumentar_fontex2
    };

    window.toggleFont_aumentar_fontex2 = function () { Font_aumentar_fontex2.toogle(); };

    Font_aumentar_fontex2.check();

    function checkFont_aumentar_fontex2() {
        this.updateView();
    }

    function getFont_aumentar_fontex2State() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setFont_aumentar_fontex2State(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewFont_aumentar_fontex2() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleFont_aumentar_fontex2() {
        this.setState(!this.currentState);
    }
})();

//ZOOM

//zoom x1
(function () {
    var Zoom_aumentar_zoomx1 = {
        storage: 'zoomState',
        cssClass: 'zoom1x',
        currentState: null,
        check: checkZoom_aumentar_zoomx1,
        getState: getZoom_aumentar_zoomx1State,
        setState: setZoom_aumentar_zoomx1State,
        toogle: toogleZoom_aumentar_zoomx1,
        updateView: updateViewZoom_aumentar_zoomx1
    };

    window.toggleZoom_aumentar_zoomx1 = function () { Zoom_aumentar_zoomx1.toogle(); };

    Zoom_aumentar_zoomx1.check();

    function checkZoom_aumentar_zoomx1() {
        this.updateView();
    }

    function getZoom_aumentar_zoomx1State() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setZoom_aumentar_zoomx1State(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewZoom_aumentar_zoomx1() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleZoom_aumentar_zoomx1() {
        this.setState(!this.currentState);
    }
})();

//zoom x2
(function () {
    var Zoom_aumentar_zoomx2 = {
        storage: 'zoomState',
        cssClass: 'zoom2x',
        currentState: null,
        check: checkZoom_aumentar_zoomx2,
        getState: getZoom_aumentar_zoomx2State,
        setState: setZoom_aumentar_zoomx2State,
        toogle: toogleZoom_aumentar_zoomx2,
        updateView: updateViewZoom_aumentar_zoomx2
    };

    window.toggleZoom_aumentar_zoomx2 = function () { Zoom_aumentar_zoomx2.toogle(); };

    Zoom_aumentar_zoomx2.check();

    function checkZoom_aumentar_zoomx2() {
        this.updateView();
    }

    function getZoom_aumentar_zoomx2State() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setZoom_aumentar_zoomx2State(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewZoom_aumentar_zoomx2() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleZoom_aumentar_zoomx2() {
        this.setState(!this.currentState);
    }
})();

