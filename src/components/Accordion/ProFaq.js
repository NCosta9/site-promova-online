export default function ProFaq() {
    return (
        <>
            <section id="faq" class="faq" data-aos="fade-up" data-aos-duration="1000">
                <div class="container-fluid">

                    <div class="row">

                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div class="content">
                                <h3>Perguntas <strong>Frequentes</strong></h3>
                                <p>
                                Seja você um iniciante ou um veterano em marketing, aqui estão as respostas que você procura. 
                                </p>
                            </div>

                            <div class="accordion-list">
                                <ul>
                                    <li data-aos="fade-right" data-aos-duration="300">
                                        <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1">Como o marketing digital pode impulsionar meu negócio? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                            O marketing digital pode impulsionar significativamente o seu negócio de várias maneiras. Aumento da Visibilidade Online Engajamento nas Redes Sociais,Alcance Segmentado, etc.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="500">
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed">Quanto tempo levará para ver resultados? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="700">
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed">Como mediremos o sucesso das campanhas? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img">&nbsp;</div>
                    </div>

                </div>
            </section>
        </>
    )
}