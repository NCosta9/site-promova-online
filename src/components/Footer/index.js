import ButtonBlack from "../Buttons/ButtonsBlack"

export default function Footer() {
    return (
        <footer class="py-3  bg-footer">
            <div className="text-center my-5">
                <ButtonBlack text="BAIXAR CURRICULO VITAE"  link="https://drive.google.com/file/d/1F6Fn1W-RHQA8tjZuAqEnYlRa-2Iytv6q/view?usp=sharing" />
                <ButtonBlack text="CONTATE ME"  link="https://api.whatsapp.com/send?phone=5538983981848&text=Ol%C3%A1,%20Natanael!%20Visualizamos%20o%20seu%20curr%C3%ADculo%20e%20gostar%C3%ADamos%20de%20passar%20mais%20algumas%20informa%C3%A7%C3%B5es." />
            </div> 
         <div className="d-flex justify-content-around">
         <ul class="nav hstack gap-3">
                <li class="nav-item text-light m-0"><a className="px-0" href="https://github.com/NCosta9"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/github" width={40} /></a></li>
                <li class="nav-item text-light m-0"><a className="px-0" href="https://instagram.com/natanaelcostapro"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/instagram" width={40} /></a></li>
                <li class="nav-item text-light m-0"><a className="px-0" href="costaalvesn16@gmail.com"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/email" width={40} /></a></li>
                <li class="nav-item text-light m-0"><a className="px-0" href="https://api.whatsapp.com/send?phone=5538983981848&text=Ol%C3%A1,%20Natanael!%20Visualizamos%20o%20seu%20curr%C3%ADculo%20e%20gostar%C3%ADamos%20de%20passar%20mais%20algumas%20informa%C3%A7%C3%B5es."><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/whatsapp" width={40} /></a></li>
            </ul>
         </div>
            

            <p class="text-center text-light text-geral text-light border-top mt-4">© 2023 Natanael A Costa -Todos os direitos reservados</p>
        </footer>
    )
}