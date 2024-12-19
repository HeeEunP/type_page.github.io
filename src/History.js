import React from "react";
import "./History.css";
import { BadgeCheck as Certificate } from "lucide-react"; 

function History() 
{
  const timelineEvents = [
    {
      year: 2019,
      title: "회사 설립",
      description: ["B5G 저지연 전송 기술 검증을 위한 에뮬레이터 인터페이스 개발"],
    },
    {
      year: 2020,
      title: "?",
      description: ["넥밴드 마이크 어레이 음원추적 음향신호 인터페이스 모듈 개발",
        "저지연 에뮬레이터 시스템 제어를 위한 기지국/단말 사용자 인터페이스 개발",
        "AI 기반 빔포밍 테스트베드 구현",
        "신경 인터페이스 모듈의 그래픽 사용자 인터페이스(GUI) 프로그램 구현"],
    },
    {
      year: 2021,
      title: "?",
      description: ["5G NR 무선자원블록 측정 시뮬레이터 제작", "군집 뇌파 사용자 인터페이스(GUI) 구현"],
    },
    {
      year: 2022,
      title: "?",
      description: ["5G NSA 복합망 무선자원블록 특정 장치 제작", "X, Ku 대역 레이다신호 생성 및 분석기 제작",
          "무선 뇌파 데이터 양방향 제어 인터페이스"],
    },
    {
      year: 2023,
      title: "?",
      description: ["소출력 레이다 신호 테스트베드용 직교형 송수신 신호처리 모듈 개발",
          "gSM 메세지 분석 및 동작 모니터링 장치 개발", "지능형 무선 액세스 시스템 H/W 및 시스템 성능 측정 인터페이스 개발",
          "다중대역 지원 5G 무선자원블록 측정장치 제작", "임베디드 리눅스 기반 URTDN 디바이스 드라이버 제작"],
    },
    {
      year: 2024,
      title: "?",
      description: ["경호임무용 특화망 간섭신호 탐지장치 HW 제작", "5G SA망 무선자원블록 측정장치 제작",
          "16채널 무선 뇌파 데이터 양방향 제어 인터페이스 구현", 
          "지능형 무선 액세스 시스템 기계학습모델의 성능 측정 환경 구축 및 사용자 인터페이스 개발"
      ],
    },
  ];

  const certifications = [
    "벤처기업인증 (2019.3)",
  ];

  return (
    <div className="our-journey-container">
      
      <section className="timeline-section">
        <h1 className="section-title">Our History</h1>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-details">
                <h2 className="timeline-title">{event.title}</h2>
                <ul className="timeline-description-list">
                  {event.description.map((desc, i) => (
                    <li key={i} className="timeline-description-item">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="certification-section">
        <h2 className="section-title">인증</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-header">
              <Certificate className="card-icon" sx={{ fontSize: 25 }}/>
              <h3 className="card-title">인증 내역</h3>
            </div>
            <ul className="card-content">
              {certifications.map((certification, index) => (
                <li key={index}>{certification}</li>
              ))}
            </ul>
          </div>

          <div className="certification-img">
            <img
              className="certi-img"
              src="/imgfile/벤처기업인증.jpg"
              alt="벤처기업인증"
              width={200}
              height={300}
            >
            </img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;



