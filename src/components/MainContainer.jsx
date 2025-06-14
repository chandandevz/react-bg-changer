import ChangeButton from "./ChangeButton";
import { useState } from "react";
function MainContainer() {
    const [mainBgColor, setMainBgColor] = useState("#000");
    return (
        <main
            className="flex  justify-center items-center h-[100vh]"
            style={{ backgroundColor: mainBgColor }}
        >
            <div className="flex gap-4 p-4 bg-white rounded-3xl">
                <ChangeButton
                    btnBgColor="red"
                    setMainBgColor={setMainBgColor}
                />
                <ChangeButton
                    btnBgColor="blue"
                    setMainBgColor={setMainBgColor}
                />
                <ChangeButton
                    btnBgColor="yellow"
                    setMainBgColor={setMainBgColor}
                />
            </div>
        </main>
    );
}

export default MainContainer;
