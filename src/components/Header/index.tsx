import Image from "next/image";
import * as Styled from "./header.style";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Header = () => {
    const {push} = useRouter();
    const switchToHome = () =>{
        push("/");
        //window.location.reload();
        //TODO fazer com que a página atualize depois de chegar na home
    }

    return (
        <Styled.Header>
            <Styled.SuperiorDiv>
                <Styled.Logo onClick={switchToHome}>
                    <Image
                        src="/imgs/favIcon.ico"
                        width={96}
                        height={119}
                        alt="logo contendo imagem da Penelope Charmosa"
                    />
                </Styled.Logo>
            </Styled.SuperiorDiv>
            <Styled.InferiorDiv>
                <p>Penelope Charmosa</p>
            </Styled.InferiorDiv>
        </Styled.Header>
    );
};

export default Header;
