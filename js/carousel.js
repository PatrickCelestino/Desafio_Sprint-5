//Array storage class 
let carouselArr = [];

window.addEventListener("DOMContentLoaded", () => {
    carouselArr.push(new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"));
    carouselArr.push(new Carousel("imagem_2.jpg", "Ford a nossa história", "#"));
    carouselArr.push(new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"));
    Carousel.Start(carouselArr);
});

class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            this._arr = arr;
            this._sequence = 0;
            this._size = arr.length;
            this.ShowCurrent();
            this._interval = setInterval(() => this.Next(), 5000); 
            this.CreateDots();
            this.UpdateDots();
        } else {
            throw "Method Start needs a valid array.";
        }
    }

    static ShowCurrent() {
        const item = this._arr[this._sequence];
        const img = document.getElementById("carousel-image");
        const titleDiv = document.getElementById("carousel-title");
        const link = document.getElementById("carousel-link");

        if (img && titleDiv && link) {
            img.src = "img/" + item.image;
            titleDiv.textContent = item.title;
            link.href = item.link;
        }
    }

    static Next() {
        this._sequence = (this._sequence + 1) % this._size;
        this.ShowCurrent();
        this.UpdateDots();
    }

    static Previous() {
        this._sequence = (this._sequence - 1 + this._size) % this._size;
        this.ShowCurrent();
        this.UpdateDots();
    }

    static CreateDots() {
        const container = document.getElementById("carousel-dots");
        container.innerHTML = "";

        this._arr.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.className = "dot";
            dot.addEventListener("click", () => {
                this._sequence = index;
                this.ShowCurrent();
                this.UpdateDots();
            });
            container.appendChild(dot);
        });
    }

    static UpdateDots() {
        const dots = document.querySelectorAll("#carousel-dots .dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === this._sequence);
        });
    }
}