import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'

import emailjs from 'emailjs-com';

import { FiSend } from 'react-icons/fi'

import "./Contact.css"
import { useState } from 'react';

const serviceId = import.meta.env.VITE_SERVICE_ID_EMAIL;
const templateId = import.meta.env.VITE_TEMPLATE_ID_EMAIL;
const userId = import.meta.env.VITE_API_KEY;

const Contact = () => {

  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [typeMessage, setTypeMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos antes de enviar o email
    if (!name || !email || !subject || !message) {
      setShowMessage(true)
      setTypeMessage('error-empty')
        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
        return;
      }
      

    setIsDisabled(true);

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then(() => {
        setIsDisabled(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setShowMessage(true);
        setTypeMessage('success')

        // Limpa a mensagem após 5 segundos
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      })
      .catch((error) => {
          console.error('Erro ao enviar o email:', error);
          setShowMessage(true);
          setTypeMessage('error');
          setIsDisabled(false);
          setTimeout(() => {
            setShowMessage(false);
          }, 7000);
        });
  };


    return (
      <section id="contact" className="contact section">
          <h2 className="section_title">
            Fale <span>Comigo!</span>
          </h2>

          <div className="contact_container container grid">
            <div className="contact_data">
              <h3 className="contact_title">Não seja Tímido</h3>
              <p className="contact_description">
                Caso tenha gostado do meu trabalho, <br/> preencha o formulário
                ao lado e envie <br/> um e-mail para mim. 
                Se preferir, também <br/> pode entrar em contato através do <br/> WhatsApp logo abaixo:
              </p>
              <div className="contact_info">
                <div className="info_item">
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5583988729338&text&type=phone_number&app_absent=0"
                      target='_blank'  
                      rel="noreferrer" 
                    >
                    <FaWhatsapp className='info_icon'/>
                    </a>
                  <div>
                    <span className="info_title">WhatsApp</span>
                    <h4 className="info_desc">
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5583988729338&text&type=phone_number&app_absent=0"
                      target='_blank'  
                      rel="noreferrer" 
                    >
                      (83) 98872-9338
                    </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="contact_socials">
                <a 
                  href="https://www.linkedin.com/in/filipemiranda22/" 
                  target='_blank'  
                  rel="noreferrer" 
                  className="contact_social-link"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="https://github.com/FilipeMiranda22" 
                  target='_blank'  
                  rel="noreferrer"   
                  className="contact_social-link"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <form onSubmit={sendEmail} className="contact_form">
              <div className="form_input-group">
                <div className="form_input-div">
                  <input 
                    type="text"
                    placeholder='Seu Nome'
                    className="form_control" 
                    name='from_name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form_input-div">
                  <input 
                    type="email"
                    placeholder='Seu E-mail'
                    className="form_control" 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form_input-div">
                  <input 
                    type="text"
                    placeholder='Seu Assunto'
                    className="form_control" 
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>

              <div className="form_input-div">
                <textarea 
                  className="form_control textarea"
                  placeholder='Sua Mensagem'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>

                <div className="button-group">
                  <button className={`button ${isDisabled ? 'disabled' : ''}`}>
                    Enviar
                    <span className="button_icon contact_button-icon">
                      <FiSend/>
                    </span>
                  </button>
                  
                  <div 
                    className={`email_message ${typeMessage === "success" ? "success" : "error-empty"} ${showMessage && "show"}`}
                  >
                    {typeMessage === "error-empty" ? "Preencha todos os campos, por favor!" : 
                     typeMessage === "success" ? "E-mail enviado com sucesso!" : 
                     typeMessage === "error" ? "Houve um problema ao enviar o email, tente novamente!" : ""
                    }
                  </div>                 
                  
                </div>
              </div>
            </form>
          </div>
      </section>
    )
  }
  
  export default Contact