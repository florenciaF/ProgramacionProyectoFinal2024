
export const Home = () => {
  return (
    <>
        <section className="py-0" id="home">
            <div 
                className="bg-holder d-none d-lg-block" 
                style={{
                    backgroundImage: "url(assets/img/illustrations/1.png)",
                    backgroundPosition: "right top",
                    backgroundSize: "contain",
                }}
                >
            </div>

            <div 
                className="bg-holder d-lg-none"
                    style={{
                        backgroundImage: "url(assets/img/illustrations/1-1.png)",
                        backgroundPosition: "left top",
                        backgroundSize: "cover",
                    }}>

            </div>
     

            <div className="container">
            <div className="row align-items-center min-vh-100">
                <div className="col-md-7 col-lg-6 py-6 text-md-start text-center">
                <h1>Conecta con la Innovación:<br />  Eventos de Tecnología Online</h1>
                <p className="lead text-muted">Con nuestra aplicación, tendrás al alcance de tu mano una lista completa de eventos de tecnología online que se actualizan constantemente. Desde conferencias sobre inteligencia artificial hasta las últimas tendencias en desarrollo de software, podrás elegir qué sesiones te interesan, sin importar dónde te encuentres.</p>
                <p className="lead text-muted">Participa con disertantes internacionales. Con solo un clic, tendrás acceso directo al link del evento online, sin perder tiempo en búsquedas complejas.</p>
                <div className="pt-4"><div className="btn btn-primary me-3">Registrarme </div><div className="btn btn-outline-primary" >Mas información</div></div>
                </div>
            </div>
            </div>
        </section>
        <section className="pt-4 pt-md-5">

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-6 order-md-1"><img className="img-fluid mb-5 mb-md-0" src="assets/img/illustrations/2.png" alt="" /></div>
            <div className="col-md-7 col-lg-6">
              <h2>Tu Puerta a los Eventos Tech del Mundo</h2>
              <p className="lead text-muted mb-3"> Todo en un solo lugar
              Olvídate de navegar por múltiples plataformas para encontrar información sobre eventos. Nuestra aplicación centraliza todo: desde la descripción del evento, la agenda detallada, hasta el acceso a la charla, brindándote comodidad y eficiencia.</p>
              <p className="lead text-muted mb-3">La interfaz amigable de nuestra plataforma te permitirá encontrar los eventos de forma rápida y sencilla. Además, siempre estamos agregando nuevos eventos para que no te pierdas ninguna oportunidad de seguir formándote en el mundo de la tecnología. </p>
              <div className="row">
                <div className="col-6 pt-5"><img className="mb-3" src="assets/img/icons/folder.png" width="36" alt="" />
                  <h5> Explora Temáticas Variadas</h5>
                  <p className="text-muted mb-0">Revenue is the income generated from normal business operations</p>
                </div>
                <div className="col-6 pt-5"><img className="mb-3" src="assets/img/icons/layers.png" width="36" alt="" />
                  <h5>Calendario de Eventos</h5>
                  <p className="text-muted mb-0">A business plan is a written document that describes in detail </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
        {/* <div>
            <div className='row justify-content-center'>
                <div className='col-md-2'>
                    <Card 
                    img='arbol.jpg'
                    title='prueba' 
                    text='descripcion de prueba'     
                    />
                </div>
                <div className='col-md-2'>
                    <Card 
                    img='arbol.jpg'
                    title='prueba' 
                    text='descripcion de prueba'     
                    />
                </div>
                <div className='col-md-2'>
                    <Card 
                    img='ocean.jpg'
                    title='otro ejemplo' 
                    text='descripcion de ejemplo'
                    />
                </div>
                <div className='col-md-2'>
                    <Card 
                    img='playa.jpg'
                    title='otro ejemplo' 
                    text='descripcion de ejemplo'
                /> 
                </div> 
            </div>
        </div> */}
    </>
  )
}
