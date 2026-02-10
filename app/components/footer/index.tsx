import { ContainerGRID } from "../containerGRID";
import { InfoTop } from "./infoTop";


export function Footer(){
    return(
        <footer className="pt-20 pb-6">
            <ContainerGRID>
                 <InfoTop/>
                 <p className="text-center text-sm tablet:text-base mt-12 tablet:mt-20 pt-6 border-t border-grey-400">Copyright © 2035 Hirezy. All Rights Reserved.</p>
            </ContainerGRID>
        </footer>
    )
}