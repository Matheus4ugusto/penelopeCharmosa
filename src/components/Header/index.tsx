import Image from "next/image";
import * as Styled from "./header.style";
import {useRouter} from "next/navigation";

const Header = () => {
    const {push} = useRouter();
    return (
        <Styled.Header>
            <div id="superiorDiv">
                <Styled.Logo onClick={() => push("/")}>
                    <Image
                        src="/imgs/favIcon.ico"
                        width={96}
                        height={119}
                        alt="logo contendo imagem da Penelope Charmosa"
                    />
                </Styled.Logo>
            </div>
            <div id="inferiorDiv">
                <p>Penelope Charmosa</p>
            </div>
        </Styled.Header>
    );
};

export default Header;
