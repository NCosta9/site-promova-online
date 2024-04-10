import SendOrcamento from "../../Utils/SendOrcamento";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';



export default function ProContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { register, handleSubmit, getValues } = useForm();

  //Envia todos os dados do formulario por meio de uma url do whatsapp
  const formValues = getValues();

  const nome = `${formValues.nome}`
  const telefone = `${formValues.telefone}`
  const email = `${formValues.email}`
  const mensagem = `${formValues.mensagem}`

  //Dados para envio via Email
  const assunto = "Novo Orçamento";
  const cabecalho = "Ja recebemos as informações para seu " + assunto + " ,dentro de alguns instantes entraremos em contato com mais informações. Verifique abaixo se as informações que recebemos estão corretas: ";



  return (
    <>
      <section id="contact" class="contact" data-aos="fade-up" data-aos-duration="1500">
        <div class="container">

          <div class="section-title">
            <h2>Contato</h2>
            <p>Estamos aqui para ouvir, colaborar e transformar suas ideias em ações tangíveis. Entre em contato conosco e vamos construir juntos o futuro digital da sua marca.</p>
          </div>
        </div>

        <div>
          <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31656393.24768162!2d-51.31668!3d-14.4095262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4bf0fca3adf0941f%3A0xaa3d534177a6fe75!2sPromovaOnline!5e0!3m2!1spt-BR!2sbr!4v1702569311347!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="container">

          <div class="row mt-5">

            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="ri-map-pin-line"></i>
                  <h4>Localização:</h4>
                  <p>Condominio São Francisco <br />Recanto da Ema, Brasilia-DF</p>
                </div>

                <div class="email">
                  <i class="ri-mail-line"></i>
                  <h4>Email:</h4>
                  <p>agencia.promovaonline@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="ri-phone-line"></i>
                  <h4>Contato:</h4>
                  <p>(38) 98848-3981</p>
                  <p>(61) 99806-7503</p>

                </div>

              </div>

            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">

              <form class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Seu Nome..." {...register("nome", { required: true })} required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="tel" class="form-control" name="telefone" id="subject" placeholder="Seu Whatsapp..." {...register("telefone", { required: true })} required />
                </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Seu email..." {...register("email", { required: true })} required/>
                  </div>
                </div>
               
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Mensagem descrevendo o que você deseja.."{...register("mensagem", { required: true })} required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center">
                  <button
                    className="mt-2"
                    type="button"
                    onClick={handleSubmit(handleShow)}

                  >
                    <i className="bi bi-whatsapp text-light me-2"></i>
                    Enviar mensagem
                  </button>
                </div>

                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header>
                    <Modal.Title>
                      <h4 className="mt-2 fw-bold">Informações:</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Após recebermos sua mensagem, dentro de alguns instantes entraremos em contato em um dos meios de contato fornecido nos campos de contato!</p>
                    <p>Horario de atendimento: <b>Segunda a Sexta das 8h às 17h.</b> </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <SendOrcamento
                      text="Enviar mensagem"
                      nome={nome}
                      telefone={telefone}
                      email={email}
                      assunto={assunto}
                      cabecalho={cabecalho}
                      mensagem={mensagem}


                    />
                  </Modal.Footer>
                </Modal>



              </form>

            </div>

          </div>

        </div>
      </section>

    </>
  )
}