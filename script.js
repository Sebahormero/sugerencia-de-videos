const insertarVideo = (() => {
    let video = (url, id) => {
        switch (id) {
            case "musica":
                document.getElementById('musica').setAttribute('src', url);
                break;
            case "pelicula":
                document.getElementById('pelicula').setAttribute('src', url);
                break;
            case "serie":
                document.getElementById('serie').setAttribute('src', url);
                break;
        }
    }

    return {
        desplegarVideo: (url, id) => {
            video(url, id)
        }
    }
})()

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (url) => _url = url;
    }
    get url() {
        return this.getUrl();
    }
    set url(url) {
        this.setUrl(url);
    }
    setInicio() {
        console.log(`Este método es para realizar un cambio en la ULR del video`);
    }
}


class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (id) => _id = id;
    }
    get id() {
        return this.getId();
    }
    set id(id) {
        this.setId(id);
    }

    setInicio(url, id, tiempo) {
        url = `${url}?start=${tiempo}`
        return insertarVideo.desplegarVideo(url, id)
    }

    playMultimedia(url, id) {
        return insertarVideo.desplegarVideo(url, id)
    }
}


const musica_01   = new Reproductor()
const pelicula_01 = new Reproductor()
const serie_01    = new Reproductor()

musica_01.playMultimedia("https://www.youtube.com/embed/iNDDX7OKeII?si=wy4UwX4XGlBS6ZsO", 'musica')
pelicula_01.playMultimedia("https://www.youtube.com/embed/nQe9JfYBeE8?si=TJssYH4-pD6zhgXJ", 'pelicula')
// serie_01.playMultimedia("https://www.youtube.com/embed/Ed3wIH1leLc?si=H2t96ZkwULBYSzLA",'serie')
serie_01.setInicio("https://www.youtube.com/embed/Ed3wIH1leLc?si=H2t96ZkwULBYSzLA", 'serie', 30)


  