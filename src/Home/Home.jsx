import './Home.css'
import { History } from '../History/History'
export function Home(){
    return(
        <>
            <section className="banner">

            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h4>Linkin Park</h4>
                            <p>
                            Linkin Park es una banda estadounidense de rock alternativo procedente de Agoura Hills, California formada en 1996. Integrada por Mike Shinoda, Dave Farrell, Joe Hahn, Brad Delson, Rob Bourdon y Chester Bennington, este último como voz principal. La banda comenzó con sus primeros trabajos musicales de manera independiente, en la que grabaron su primer material, llamado Xero; sin embargo, no tuvieron éxito en la búsqueda de un sello discográfico, ya que nadie mostraba interés por su trabajo. No fue hasta 1999, que con el apoyo de Jeff Blue, quien ejercía como vicepresidente de Warner Records, lograron firmar su primer contrato. El nombre proviene de un juego de palabras que hace referencia al Lincoln Park en Santa Mónica
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjuan.appspot.com/o/link1.jpg?alt=media&token=d278bf65-b212-4ecc-8468-4962144864fa" alt="foto" className='img-fluid w-100'/>
                            <p>El nombre del grupo es un juego de palabras haciendo referencia al Lincoln Park en Santa Mónica. Los primeros años de la banda se remontan a un pequeño estudio del vocalista Mike Shinoda donde él, junto a un amigo y compañero de colegio Agoura High School, Brad Delson grabaron el primer material de la banda en 1995.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjuan.appspot.com/o/link2.jpg?alt=media&token=b0ed8bb1-10cf-4ea3-a5d5-de10d0f7ed9f" alt="foto" className='img-fluid w-100' />
                            <p>En marzo de 2003, salió al mercado su segundo álbum de estudio, Meteora. Solo en las primeras semanas logró ventas de 810 000 unidades,18​ el álbum entró en el Billboard 200 en el puesto número uno, y se convirtió en el tercer disco más vendido del año.​ De este disco surgieron canciones como «Somewhere I Belong» y «Numb»; esta última recibió un disco de oro en los Estados Unidos y Australia.20​21​ Ese mismo año, MTV2 nombró a Linkin Park como la sexta «mejor banda en la era del vídeo musical» y la tercera «mejor banda del nuevo milenio», detrás de Oasis y Coldplay.​ Asimismo, Billboard ubicó al grupo en el puesto diecinueve de los mejores artistas de la década. En noviembre de ese mismo año, la banda lanzó su primer álbum en directo Live in Texas, que grabaron en el Reliant Stadium, en Houston, Texas.​ El disco obtuvo múltiples certificaciones de oro en Alemania, Nueva Zelanda, Reino Unido y Austria.​ En 2008 lanzaron otro álbum en vivo, Road to Revolution: Live at Milton Keynes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner2"></section>
            <section className='my-5'>
                <History/>
            </section>
        </>
    )
}