import React, {useState}                from "react";
import { useNavigate}                   from "react-router-dom";
import CreditScoreOutlinedIcon          from '@mui/icons-material/CreditScoreOutlined';
import SavingsOutlinedIcon              from '@mui/icons-material/SavingsOutlined';
import RedeemOutlinedIcon               from '@mui/icons-material/RedeemOutlined';
import RestaurantOutlinedIcon           from '@mui/icons-material/RestaurantOutlined';
import LaptopOutlinedIcon               from '@mui/icons-material/LaptopOutlined';
import Diversity1OutlinedIcon           from '@mui/icons-material/Diversity1Outlined';
import DirectionsCarFilledOutlinedIcon  from '@mui/icons-material/DirectionsCarFilledOutlined';
import AirOutlinedIcon                  from '@mui/icons-material/AirOutlined';
import { VscGear }                      from "react-icons/vsc";
import { VscRadioTower }                from "react-icons/vsc";
import { VscCircuitBoard }              from "react-icons/vsc";
import { VscServer }                    from "react-icons/vsc";
import "./AboutUs.css";


function AboutUs() 
{
    const navigate = useNavigate();
    
    const [highlighted, setHighlighted] = useState("");

    const goToTechnologies = () => {
        navigate("/technologies");
    };

    const goToHistory = () =>{
        navigate("/history");
    }

    return (
        <div className="about-us-container">
        <main className="main-content">
        <section className="hero-section">
            <div className="container">
                <div className="hero-text">
                    <h1 className="hero-title">이동통신 솔루션</h1>
                    <p className="hero-description">
                        TMGKorea는 이동통신 기술로 미래를 선도합니다. 우리의 기술은 당신의 비즈니스를 한 단계 더 발전시킵니다.
                    </p>
                    <div className="hero-buttons">
                        <button className="primary-button" onClick={goToTechnologies}>제품 살펴보기</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="point-section">
            <h2 className="hero-title" style={{ color: '#204c7a' }}>TMGKorea Keyword</h2>
        
            <div className="keyword-image-container">
                <img
                    src="/imgfile/keyword_2.png"
                    alt="System"
                    className={`keyword-bubble system ${highlighted === "system" ? "active" : ""}`}
                />
                <img
                    src="/imgfile/keyword_1.png"
                    alt="Radio Technology"
                    className={`keyword-bubble radio ${highlighted === "radio" ? "active" : ""}`}
                />
                <img
                    src="/imgfile/keyword_3.png"
                    alt="Hardware"
                    className={`keyword-bubble hardware ${highlighted === "hardware" ? "active" : ""}`}
                />
                <img
                    src="/imgfile/keyword_4.png"
                    alt="Software Defined Radio"
                    className={`keyword-bubble software ${highlighted === "software" ? "active" : ""}`}
                />
            </div>
        
            <div className="point-grid">
                <div
                    className="point-card"
                    onMouseEnter={() => setHighlighted("system")}
                    onMouseLeave={() => setHighlighted("")}
                >
                    <div className="icon"><VscGear size="40" /></div>
                    <h3 className="point-title">System</h3>
                </div>

                <div
                    className="point-card"
                    onMouseEnter={() => setHighlighted("radio")}
                    onMouseLeave={() => setHighlighted("")}
                >
                    <div className="icon"><VscRadioTower size="40" /></div>
                    <h3 className="point-title">Radio Technology</h3>
                </div>

                <div
                    className="point-card"
                    onMouseEnter={() => setHighlighted("hardware")}
                    onMouseLeave={() => setHighlighted("")}
                >
                    <div className="icon"><VscCircuitBoard size="40" /></div>
                    <h3 className="point-title">Hardware</h3>
                </div>

                <div
                    className="point-card"
                    onMouseEnter={() => setHighlighted("software")}
                    onMouseLeave={() => setHighlighted("")}
                >
                    <div className="icon"><VscServer size="40" /></div>
                    <h3 className="point-title">Software Defined Radio</h3>
                </div>
            </div>
        </section>

        <section class="innovation-section">
            <div class="innovation-content">
                <h2>슬로건?</h2>
                <p>
                    TMGKorea는 지속적인 연구 개발을 통해 하드웨어 기술의 새로운 세계를 열어갑니다.
                    우리의 전문가들은 매일 더 나은 당신의 비지니스를 위해 노력하고 있습니다.
                </p>
                <button className="detail-button" onClick={goToHistory}>
                    자세히 알아보기
                </button>
            </div>
            <img
                class="innovation-image"
                src="/imgfile/예시사진3.png"
                alt="TMGKorea 연구소"
            />
        </section>
        <section className="benefits-section">
            <h2 className="section-title">회사 복지</h2>
            <div className="benefits-grid">
                <div className="benefit-category">
                    <CreditScoreOutlinedIcon sx={{ fontSize: 30 }}/>
                    <ul>
                        <li>건강검진</li>
                        <li>4대 보험</li>
                        <li>각종 경조사 지원</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <SavingsOutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>퇴직연금</li>
                        <li>상여금</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <RedeemOutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>명절선물/귀향비</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <RestaurantOutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>점심식사 제공</li>
                        <li>간식 제공</li>
                        <li>식비 지원</li>
                        <li>음료 제공(차, 커피)</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <LaptopOutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>회의실</li>
                        <li>공기청정기</li>
                        <li>게임기</li>
                        <li>최고 성능 컴퓨터</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <Diversity1OutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>자유복장</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>주차장 제공</li>
                    </ul>
                </div>
                <div className="benefit-category">
                    <AirOutlinedIcon sx={{ fontSize: 30}}/>
                    <ul>
                        <li>휴가비 지원</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    </div>
    );
}

export default AboutUs;
