import '../../../node_modules/font-awesome/fonts/fontawesome-webfont.eot'
import '../../../node_modules/font-awesome/fonts/fontawesome-webfont.svg'
import '../../../node_modules/font-awesome/fonts/fontawesome-webfont.ttf'
import '../../../node_modules/font-awesome/fonts/fontawesome-webfont.woff'
import '../../../node_modules/font-awesome/fonts/fontawesome-webfont.woff2'
import '../../../node_modules/font-awesome/fonts/FontAwesome.otf'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import '../sass/index.scss'
import '../imgs/logo.png'
import '../../paginas/cursos.html'
import '../../paginas/inicio.html'
import '../../paginas/sobre.html'
import '../../paginas/suporte.html'

(function () {
    function marcarLinkComoSelecionado(hash) {
        const links = document.querySelectorAll(`[wm-link]`)
        links.forEach(link => link.classList.remove('selecionado'))

        const link = document.querySelector(`[wm-link='${hash}']`)
        link.classList.add('selecionado')
    }

    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                marcarLinkComoSelecionado(hash)
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()