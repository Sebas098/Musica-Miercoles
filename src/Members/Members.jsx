export function Members() {
  let integrantes = [
    {
      nombre: "Chester Bennington",
      rol: "Cantante",
      datos:"Chester Bennington fue el artífice de que Linkin Park alcanzara la fama mundial. En 1996 la banda se conocía como ‘Xero’ y su vocalista era Mark Wakefield, quien en tres años no logró consolidarse, por lo que Mike Shinoda, Dave Farrell, Joe Hahn, Brad Delson, Rob Bourdon lo corrieron y en su reemplazo llamaron a Bennington .este joven de 23 años le dio a la banda un sonido único; un nuevo nombre (Linkin Park) y su primer contrato con la disquera Warner Bros. Records en 1999. En 2000 Chester Bennington sonó en las emisoras de todo el mundo con su álbum debut Hybrid Theory, del que salieron canciones como Crawling, Papercut, In the End y One Step Closer.",

      foto: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg",
      nacimiento: "Arizona, Estados Unidos 1976",
      id:1
      
    },
    {
      nombre: "Brad Delson",
      rol: "Guitarrista",
      datos:"Brad Delson, uno de los fundadores de Linkin.Park conoció a Mike Shinoda en la escuela secundaria de séptimo grado. El guitarrista creó su primer grupo musical un año antes, pero no hubo mucho tiempo para el ensayo. Después de graduarse de la escuela, ingresó a una institución de educación superior y recibió con éxito un diploma en comunicaciones. Sin embargo, no tenía el más mínimo deseo de trabajar en esta área y con mucho gusto comenzó a organizar su propio grupo. Él ya tenía algo de experiencia en este campo de actividad: después de la escuela, él y Mike reunieron un equipo y comenzaron a ensayar. El nombre de su creación, Brad Delson, se le ocurrió a sí mismo: Xero. Solo quedaba por revivir la composición y recolectar buen material. Invitó a su compañero de cuarto y compañero de clase Dave Farrell en primer lugar.",
      foto: "https://upload.wikimedia.org/wikipedia/commons/3/38/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0496.jpg",
      nacimiento: "California, Estados Unidos 1977",
      id:2
    },
    {
      nombre: "Scott Koziol",
      rol: "Bajo Electrico",
      datos:"Scott Koziol fue bajista temporal de Linkin Park . Tocó el bajo para la canción  One Step Closer  en el álbum Hybrid Theory (Ian Hornbeck tocó el bajo en otras tres pistas, el guitarrista de Linkin Park, Brad Delson, tocó el bajo ). También se puede ver a Scott en el video de MTV de One Step Closer, e hizo varias giras por los Estados Unidos con la banda, incluidas paradas en The Roxy, The Whiskey, Avalon, Roseland (NY), programas de radio y otros. Se fue cuando Dave Phoenix Farrell se reincorporó a Linkin Park a finales de 2000. También ha tocado con Kottonmouth Kings y otros artistas.",
      foto: "https://m.media-amazon.com/images/M/MV5BYjdmYzgyMTMtMzJjYy00NTVmLWEwNmMtZGY1OGJlZTRlNjNlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
      nacimiento: "Estados Unidos 1972",
      id:3
    },

    {
        nombre: "Mike Shinoda",
        rol: "Pianista",
        datos:"Uno de los vocalistas de esta agrupación estadounidense, Mike, no solo se destaca en la música como guitarrista o cantante. Sus dotes artísticas lo hacen destacar también en las artes plásticas como la pintura y el diseño gráfico. Además, tiene muy buen gusto y nunca se le ve mal vestido en las galas donde hace presencia.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0450.jpg/640px-Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0450.jpg",
        nacimiento: "California, Estados Unidos 1977",
        id:4
    
        
      },

      {
        nombre: "Rob Bourdon",
        rol: "Baterista",
        datos:"Rob comenzó a tocar la batería a la edad de 10 años tras ver un concierto de Aerosmith. Ya que su madre, Patty, fue la exnovia de Joey Kramer, el baterista de Aerosmith, Bourdon pudo estar en el backstage y ver toda la producción. Kramer también dio a Rob un pedal de bombo. A Rob también le gusta tocar piano cuando tiene tiempo. Rob acostumbraba a tomar lecciones cuando era joven y forzado a seguir.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rob_Bourdon.jpg",
        nacimiento: "California, Estados Unidos 1979",
        id:5
      },

      {
        nombre: "Joe Hahn",
        rol: "Tocadiscos",
        datos:"Hahn se graduó de la Herbert Hoover High School en Glendale en 1995. Luego estudió en el Art Center College of Design de Pasadena, pero no se graduó. Hahn se unió a Linkin Park, llamada en ese entonces Xero, en 1997 como el DJ de la banda. Desde entonces, él ha dirigido la mayoría de los videos de la banda (excepto One Step Closer,Crawling,Faint Given Up y We Made It. Hahn, junto con su compañero de banda Mike Shinoda, es responsable de la mayor parte de las ilustraciones de los álbumes de Linkin Park.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Joe-hahn-linkinpark-singapore-2011_%281%29.jpg",
        nacimiento: "Texas, Estados Unidos 1977",
        id:6
      },

      {
        nombre: "Dave Farrell",
        rol: "Bajista",
        datos:"Hahn se graduó de la Herbert Hoover High School en Glendale en 1995. Luego estudió en el Art Center College of Design de Pasadena, pero no se graduó. Hahn se unió a Linkin Park, llamada en ese entonces Xero, en 1997 como el DJ de la banda. Desde entonces, él ha dirigido la mayoría de los videos de la banda (excepto One Step Closer Crawling Faint Given Up y We Made It . Hahn, junto con su compañero de banda Mike Shinoda, es responsable de la mayor parte de las ilustraciones de los álbumes de Linkin Park. Además, participó con Mike Shinoda en su producción The Rising Tied, del proyecto alterno de Hip Hop Fort Minor. A Joe se le ocurrió el concepto de One Step Closer y ha estado involucrado en todos los demás videos. Él es el director oficial de los videos para la banda.",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dave_Farrell_2014.JPG/220px-Dave_Farrell_2014.JPG",
        nacimiento: "Massachusetts, Estados Unidos 1977",
        id:7
      },
  ];

  return (
    <>
     <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            integrantes.map(function(integrante){
                return(
                    <div key={integrante.id}>
                        <div className="col">
                            <div className="card h-100 shadow">
                                <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                <img src={integrante.foto} alt="foto" className="img-fluid w-100" />
                                <h3 className="text-center fw-bold">{integrante.nacimiento}</h3>
                                <h4 className="text-center fw-bold">Rol:{integrante.rol}</h4>
                             
                                <h4 className="text-center fw-bold">{integrante.datos}</h4>

                            </div>
                        </div>
                    </div>
                )
            })
        }
     </div>

    </>
  );
}
