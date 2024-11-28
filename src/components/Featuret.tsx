import { useEffect, useRef, useState } from "react";
import chart from '../assets/feature.svg'

function Feature() {
    const [data, setData] = useState<Type1[]>([]);

    type Type1 = {
        percents: sdc[]
    }

    type sdc = {
        label: string,
        percentage: number
    }

    const firstDivRef = useRef<HTMLDivElement>(null);
    const secondDivRef = useRef<HTMLDivElement>(null);
    const thirdDivRef = useRef<HTMLDivElement>(null);
    const fourtDivRef = useRef<HTMLDivElement>(null);

    const fifthDivRef = useRef<HTMLDivElement>(null);
    const sixthDivRef = useRef<HTMLDivElement>(null);
    const seventhDivRef = useRef<HTMLDivElement>(null);
    const eighthRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch("https://trello.vimlc.uz/professional")
            .then((res) => {
                if (res.status == 200) {
                    return res.json();
                }
            })
            .then((data) => {
                setData([data]);
                console.log(2, data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (data.length > 0 && firstDivRef.current) {
            let percent = data[0].percents[0].percentage;
            const absolidWith = (percent / 100) * 431;

            firstDivRef.current.style.background = `linear-gradient(to right, #0956AF ${absolidWith}px, transparent 0%)`;
        }

        if (data.length > 0 && secondDivRef.current) {
            let percent = data[0].percents[1].percentage;
            const a = (percent / 100) * 431;

            secondDivRef.current.style.background = `linear-gradient(to right, #0956AF ${a}px, transparent 0%)`;
        }

        if (data.length > 0 && thirdDivRef.current) {
            let percent = data[0].percents[2].percentage;
            const b = (percent / 100) * 431;

            thirdDivRef.current.style.background = `linear-gradient(to right, #0956AF ${b}px, transparent 0%)`;
        }

        if (data.length > 0 && fourtDivRef.current) {
            let percent = data[0].percents[3].percentage;
            const d = (percent / 100) * 431;

            fourtDivRef.current.style.background = `linear-gradient(to right, #0956AF ${d}px, transparent 0%)`;
        }


        if (data.length > 0 && fifthDivRef.current) {
            let percent = data[0].percents[4].percentage;
            const c = (percent / 100) * 431;

            fifthDivRef.current.style.background = `linear-gradient(to right, #0956AF ${c}px, transparent 0%)`;
        }

        if (data.length > 0 && sixthDivRef.current) {
            let percent = data[0].percents[5].percentage;
            const f = (percent / 100) * 431;

            sixthDivRef.current.style.background = `linear-gradient(to right, #0956AF ${f}px, transparent 0%)`;
        }

        if (data.length > 0 && seventhDivRef.current) {
            let percent = data[0].percents[6].percentage;
            const g = (percent / 100) * 431;

            seventhDivRef.current.style.background = `linear-gradient(to right, #0956AF ${g}px, transparent 0%)`;
        }

        if (data.length > 0 && eighthRef.current) {
            let percent = data[0].percents[7].percentage;
            const e = (percent / 100) * 431;

            eighthRef.current.style.background = `linear-gradient(to right, #0956AF ${e}px, transparent 0%)`;
        }
    }, [data]);

    return (
        <div className=" py-16">
            <div>
                <div className="flex items-center mb-8 gap-[10px]">
                    <div className="w-[13px] h-[43px] bg-[#0956AF] "></div>
                    <h1 className="text-4xl font-semibold flex gap-4"><span>Шахсий</span> ва <span>касбий</span> хусусиятлар </h1>
                    <div className="w-full h-[4px] bg-[#DEE2E6]"></div>
                </div>


                <div className="flex items-center justify-between">
                    <div>
                        {data.length > 0 &&
                            data.map(function (value, index) {
                                return (
                                    <div key={index}>
                                        <div>
                                            <h1>{value.percents[0].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={firstDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[0].percentage}%
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>{value.percents[1].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={secondDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[1].percentage}%
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>{value.percents[2].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={thirdDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[2].percentage}%
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>{value.percents[3].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={fourtDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[3].percentage}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    <img src={chart} alt="" />

                    <div>
                        {data.length > 0 &&
                            data.map(function (value, index) {
                                return (
                                    <div key={index}>
                                        <div>
                                            <h1>{value.percents[4].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={fifthDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[4].percentage}%
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>{value.percents[5].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={sixthDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[5].percentage}%
                                                </span>
                                            </div>
                                        </div>


                                        <div>
                                            <h1>{value.percents[6].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={seventhDivRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[6].percentage}%
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h1>{value.percents[7].label}</h1>
                                            <div className="flex flex-row gap-[18px] items-center">
                                                <div
                                                    ref={eighthRef}
                                                    className="w-[431px] h-2 rounded-full border border-solid border-gray-600 "
                                                ></div>
                                                <span className="text-[#212529] text-xl font-medium">
                                                    {value.percents[7].percentage}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
