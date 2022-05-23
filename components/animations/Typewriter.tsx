import { useState } from 'react';

import { default as TypewriterEffect } from 'typewriter-effect';

const Typewriter = () => {
    const [isClosed, setIsClosed] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div
            className={`flex flex-col mb-2 font-mono text-lg bg-white rounded-lg shadow dark:bg-gray-800 ${
                isClosed && 'hidden'
            }`}>
            <div className="flex px-3 py-2 rounded-t-lg dark:bg-gray-900 bg-blue-strong">
                <div
                    className="w-3 h-3 mr-2 bg-red-500 rounded-full hover:cursor-pointer"
                    onClick={() => setIsClosed(true)}>
                    <div className="text-xs -translate-y-0.5 opacity-40 font-bold text-black">
                        x
                    </div>
                </div>
                <div
                    className="w-3 h-3 mr-2 bg-yellow-500 rounded-full hover:cursor-pointer"
                    onClick={() => setIsMinimized(!isMinimized)}>
                    {' '}
                    <div className="text-lg font-bold text-black -translate-y-2 opacity-40">
                        -
                    </div>
                </div>
                <div className="w-3 h-3 mr-2 bg-green-500 rounded-full"></div>
            </div>
            <div className={`flex w-full ${isMinimized && 'hidden'}`}>
                <div className="flex flex-col py-1 pl-3 pr-2 text-black border-r-2 dark:border-gray-700 border-blue-primary dark:text-[#5f71a8]">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
                <div className="py-1 pl-2 pr-3 text-left text-black whitespace-pre-wrap dark:text-[#eaf878]">
                    <TypewriterEffect
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`Hello World! <br /> <br />`)
                                .pasteString(
                                    `It all began with this line of code....`,
                                    null
                                )
                                .pauseFor(2500)
                                .deleteAll(1)
                                .changeDelay(50)
                                .typeString(`My name is Gerardo Rodriguez.`)
                                .pauseFor(500)
                                .deleteAll(1)
                                .typeString(`const Programmer = { <br />`)
                                .typeString(
                                    `    profession: 'IT professional', <br />`
                                )
                                .typeString(
                                    `    abilities: I can do everything!!!`
                                )
                                .pauseFor(500)
                                .changeDeleteSpeed(20)
                                .deleteChars(22)
                                .changeDelay(30)
                                .typeString(
                                    `['problem solving', 'team work', 'creativity', 'adaptability'], <br />`
                                )
                                .typeString(
                                    `    hobbies: '['Web Development', 'coding lover']' };`
                                )
                                .pauseFor(500)
                                .deleteAll(1)
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Typewriter;
