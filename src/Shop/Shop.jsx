export function Shop() {
  let Shop = [
    {
      ListadoDeProductos: "Camisetas",
      imagendeproducto:"https://http2.mlstatic.com/D_NQ_NP_982170-MCO44989723491_022021-O.jpg",
      precioproductos:"$ 44.900",

      
      
      id:1
      
    },
    {
      ListadoDeProductos: "Camisetas",
      imagendeproducto:"https://http2.mlstatic.com/D_NQ_NP_645973-MLM49867640256_052022-W.jpg",
      precioproductos:"$ 51.200",
       id:2
    },
    {
      ListadoDeProductos: "Camisetas",
      imagendeproducto:"https://cdn.shopify.com/s/files/1/2117/2713/products/LIP312C_SOLDIERICONSNAVYTEEBCK_grande_cropped.png?v=1663100038",
      precioproductos:"$ 71.000",
      
    
      id:3
    },

    {
      ListadoDeProductos: "Buzos",
      imagendeproducto:"https://http2.mlstatic.com/D_NQ_NP_901908-MCO50824634741_072022-V.jpg",
      precioproductos:"$ 82.400",
    id:4
        
      },

      {
        ListadoDeProductos: "Buzos",
        imagendeproducto:"https://http2.mlstatic.com/D_NQ_NP_779806-MLM47181296060_082021-W.jpg",
        precioproductos:"$ 91.300",
        id:5
      },

      {
        ListadoDeProductos: "Buzos",
        imagendeproducto:"https://falabella.scene7.com/is/image/FalabellaCO/gsc_118359529_2026698_1?wid=800&hei=800&qlt=70",
        precioproductos:"$ 69.900",
        id:6
      },

      {
        ListadoDeProductos: "Manillas ",
        imagendeproducto:"https://ae01.alicdn.com/kf/HTB1pVvIhqigSKJjSsppq6ybnpXau/Venta-caliente-LINKIN-PARK-Band-silicona-pulsera-negro-blanco-Color-Rock-banda-de-m-sica-silicona.jpg",
        precioproductos:"$ 44.300",
        id:7
      },
      {
        ListadoDeProductos: "Manillas ",
        imagendeproducto:"https://ae01.alicdn.com/kf/Hd0ca50eff97943dd83977d914729b6c81/Linkin-Park-pulseras-banda-de-Rock-se-al-pulseras-de-cuero-cabuj-n-domo-de-vidrio.jpg",
        precioproductos:"$ 29.300",
        id:8
      },
      {
        ListadoDeProductos: "Manillas ",
        imagendeproducto:"https://m.media-amazon.com/images/I/61nvJJNM1mL._AC_SX425_.jpg",
        precioproductos:"$ 32.900",
        id:89
      },

      {
        ListadoDeProductos: "Discos ",
        
        imagendeproducto:"https://cdn.shopify.com/s/files/1/0655/7466/6497/products/ced6ca77602580a2a5bda3ffc049adbe_grande.jpg?v=1660849973",
        precioproductos:"$ 279.000",
        id:9
      },

      {
        ListadoDeProductos: "Discos ",
        imagendeproducto:"https://m.media-amazon.com/images/I/61nvJJNM1mL._AC_SX425_.jpg",
        imagendeproducto:"https://exitocol.vtexassets.com/arquivos/ids/9593180/reloj-en-vinilo-lp-vinyl-clock-linkin-park.jpg?v=637661996358630000",
        precioproductos:"$ 170.300",
        id:10
      },
      {
        ListadoDeProductos: "Discos ",
        imagendeproducto:"https://i.linio.com/p/5784592cb3af09123519609d39b1d673-product.jpg",
        precioproductos:"$ 350.000",
        id:11
      },
     

     

      {
        ListadoDeProductos: "Collares ",
        imagendeproducto:"https://s.alicdn.com/@sc04/kf/H2308aabb529b4d7f8e579f4036ee77e3a.jpg",
        precioproductos:"$ 110.900",
        id:13
      },

      {
        ListadoDeProductos: "Collares ",
        imagendeproducto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6Q5PcSReu0QrWClhQEDYPbbCzg2J91Jo6l6_A-GP_MWKc4iEtDVKHnXH4W__MLEsTJM&usqp=CAU",
        precioproductos:"$ 210.000",
        id:14
      },

      {
        ListadoDeProductos: "Collares ",
        imagendeproducto:"https://s.alicdn.com/@sc04/kf/H91d97f33a39e42c09e2589414ed64ab0M.jpg",
        precioproductos:"$ 280.000",
        id:14
      },
      {
        ListadoDeProductos: "Gorras ",
        imagendeproducto:"https://http2.mlstatic.com/D_NQ_NP_869528-CBT54415522198_032023-O.jpg",
        precioproductos:"$ 44.200",
        id:15
      },

      {
        ListadoDeProductos: "Gorras ",
        imagendeproducto:"https://i.pinimg.com/736x/77/32/2e/77322e4df0927bc899e216a1e0beb835.jpg",
        precioproductos:"$ 34.500",
        id:16
      },

      {
        ListadoDeProductos: "Gorras ",
        imagendeproducto:"https://images-eu.ssl-images-amazon.com/images/I/41AqncqwRUL.jpg",
        precioproductos:"$ 27.880",
        id:17
      },
      
  ];       
       
           
        
      
      
       
return( 
     { ListadoDeProductos: "Dave Farrell",
             
            },
            
    
    
       


        <>

        
     <div className="row row-cols-1 row-cols-md-3 g-3">
        {

            
            Shop.map(function(Shop){
                return(
                    <div key={Shop.id}>
                        <div className="col">
                            <div className="card h-100 shadow">
                                <h3 className="text-center fw-bold">{Shop.ListadoDeProductos}</h3>
                                <img src={Shop.imagendeproducto} alt="imagen" className="img-fluid w-100" />
                                
                                <h3 className="text-center fw-bold">{Shop.nacimiento}</h3>
                             
                                <h4 className="text-center fw-bold">{Shop.hola}</h4>
                             
                                <h4 className="text-center fw-bold">Precio:{Shop.precioproductos}</h4>

                            </div>
                        </div>
                    </div>
                )
            })
        }
     </div>

    </>

    )
  }
  
