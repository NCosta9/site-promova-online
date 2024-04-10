import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


function SendOrcamento(props) {

 
  const navigate = useNavigate();

  function sendWhatsapp() {

  const userData = `
  Eu ${props.nome}, gostaria e realizar um ${props.assunto}.

  Telefone: ${props.telefone}
  Email: ${props.email}
  Mensagem: ${props.mensagem}
`;

    console.log(userData);

    const templateParams = {
      assunto: props.assunto,
      message: userData,
    };
    const templateParamsCliente = {
      assunto: props.assunto,
      cabecalho: props.cabecalho,
      message: userData,
      cliente: props.nome,
      cliente_mail: props.email,
    };

    console.log(templateParams);

    emailjs
      .send(
        "service_8lf872y",
        "template_interno_x4341ik",
        templateParams,
        "vjNi2VYNAD7L_m5gy"
      ).then(
        (response) => {
          // console.log("DADOS ENVIADO COM SUCCESSO!", response.status, response.text);   
          navigate("/sucesso")

        },
        (error) => {
          //console.log("OPS!! NÃO FOI POSSIVEL RECEBER OS DADOS...", error);
          navigate("/error")
        }
      );

    emailjs
      .send(
        "service_8lf872y",
        "template_cliente_sb8fnjn",
        templateParamsCliente,
        "vjNi2VYNAD7L_m5gy"
      );


    let url = "https://api.whatsapp.com/send?phone=556196192387326&text=";
    let end_url = `
  ${url}Olá, PromovaOnline, eu ${props.nome} solicitei pelo site um ${props.assunto}, ${props.mensagem}.%0A%0A 
  Dados para contato:%0A 
  ${props.email}%0A 
  ${props.telefone}%0A
  `;
    window.open(end_url)
  }


  return (

    <button
    className="btn btn-danger"
      type="button"
      onClick={sendWhatsapp}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" /></svg>
      {props.text}
    </button>

  )
}
export default SendOrcamento;