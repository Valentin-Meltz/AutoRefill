import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import banniere from "assets/bannier.png"

export default function Home() {
    return (
        <div className="main">
            <Header />
            <div className="main-container">
                <div className="banniere-container">
                    <img src={ banniere } alt="Banniere" className="banniere w-full h-full" loading="lazy"/>
                </div>
                <div className="p-4 w-full flex flex-col gap-10">
                    <div className="sol-container flex flex-col gap-4 p-4 mx-20">
                        <h2 className="title font-semibold text-2xl text-justify px-4">Nos Solutions</h2>
                        <p className="texte text-gray-500 px-4  ">
                            Avec AutoRefill, fini les oublis et les courses de dernière minute. Notre solution intelligente te permet d’identifier les produits que tu consommes régulièrement et de programmer leur réapprovisionnement automatique. Tu gardes le contrôle : ajoute, modifie ou supprime un produit à tout moment depuis ton espace personnel. 
                            <br></br>Résultat : plus de sérénité, plus de temps pour toi et moins de stress au quotidien.
                        </p>
                    </div>
                    <div className="sol-container flex flex-col gap-4 p-4 mx-20">
                        <h2 className="title font-semibold text-2xl text-justify px-4">Option de livraison et calendrier</h2>
                        <p className="texte text-gray-500 px-4  ">
                            Parce que chaque foyer a ses propres habitudes, AutoRefill propose un calendrier de livraison entièrement personnalisable. Choisis la fréquence qui te convient  chaque semaine, toutes les deux semaines, chaque mois  et reçois tes produits directement à la maison. Tu peux aussi modifier ton planning en un clic pour t’adapter à ton emploi du temps, à tes vacances ou à tes besoins ponctuels.
                        </p>
                    </div>
                </div>
                <div className="partenaire mt-10">
                    <h2 className="title font-semibold text-3xl text-center">Ils nous font confiance</h2>
                    <div className="partenaire-container flex items-center justify-around p-4 mx-20 my-20">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/1278px-Logo_Carrefour.svg.png" alt="Carrefour" className="h-40" loading="lazy"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_E.Leclerc_Sans_le_texte.svg/1200px-Logo_E.Leclerc_Sans_le_texte.svg.png" alt="Leclerc" className="h-40" loading="lazy"/>
                        <img src="https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg" alt="Auchan" className="h-40" loading="lazy"/>
                        <img src="https://www.creads.com/wp-content/uploads/2021/05/nouveau-logo-intermarche.jpg" alt="Intermarche" className="h-40" loading="lazy"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}