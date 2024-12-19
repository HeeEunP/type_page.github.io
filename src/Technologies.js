import React                from "react";
import CellWifiRoundedIcon  from '@mui/icons-material/CellWifiRounded';
import DevicesRoundedIcon   from '@mui/icons-material/DevicesRounded';
import "./Technologies.css";

function Technologies() 
{
  return (
    <div className="technologies-container">
      <main className="main">
        <section className="technologies-section">
          <h1 className="technologies-title"> Our Technologies </h1>
          <p className="technologies-description">
            TMGKorea의 기술을 만나보세요. 우리는 당신의 비즈니스를 변화시킵니다.
          </p>
        </section>
        
        <div className="our-tech-container">
          <div className="tech-card-container">

            <div className="our-tech-card">
              <CellWifiRoundedIcon className="tech-icon" style={{ fontSize: 35 }}/>
              <h3 className="our-tech-card-title"> 이동 통신 규약 관련 </h3>
              <ul className="our-tech-card-list">
                <li>WCDMA, LTE, 5G L1 및 상위 계층 기술</li>
                <li>WLAN, UWB, WiBro L1 및 상위 계층 기술</li>
                <li>네트워크 프로그래밍 기술</li>
              </ul>
            </div>

            <div className="our-tech-card">
              <DevicesRoundedIcon className="tech-icon"  style={{ fontSize: 35 }}/>
              <h3 className="our-tech-card-title"> 개발 플랫폼 관련 </h3>
                  <ul className="our-tech-card-list">
                    <li>GPU 기반 개발 기술 (SDR oriented)</li>
                    <li>FPGA (RFSoC 포함) 기반 RTL 개발 기술</li>
                    <li>Multi-core DSP 기반 개발 기술</li>
                    <li>윈도우 어플리케이션 개발 기술</li>
                    <li>안드로이드 앱 개발 기술</li>
                  </ul>
                </div>
              </div>
          </div>

        <section className="tech-section">
          <div className="tech-grid">

            <div className="tech-card">
              <h3 className="tech-card-title">5G 중계기 동기화 모듈</h3>
                <img
                  className="tech-card-image"
                  src="/imgfile/동기화 모듈.png"
                  alt="동기화 모듈 이미지"
                  style={{maxHeight: '850px', width: '85%', margin: '20px auto'}}
                />
                <p className="tech-card-description">
                  <ul>
                    <li>5G의 SSB 신호 및 PBCH 신호를 통해 Frame boundary를 검출</li>
                    <li>검출한 Frame boundary를 중계기 시스템에 동기 신호를 제공하는 SOM 모듈</li>
                    <li>TDD slot configuration 정보획득 가능</li>
                  </ul>
                </p>
            </div>

            <div className="tech-card" >
              <h3 className="tech-card-title">누수음 수집 장치의 메인프로세서 펌웨어</h3>
                <img
                  className="tech-card-image"
                  src="/imgfile/누수음수집장치.png"
                  alt="장치 이미지"
                  style={{width: "85%", margin: '20px auto'}}
                />
                <p className="tech-card-description">
                  <ul>
                    <li>스마트폰 연동 장치 기술(수자원 공사)</li>
                    <li>STM32 제어 기술</li>
                    <li>BLE(Bluetooth) 제어 기술</li>
                    <li>SKT IoT 모뎀 제어 기술</li>
                  </ul>
                </p>
            </div>

            <div className="tech-card">
              <h3 className="tech-card-title">넥밴드 마이크 어레이 음원추적 음향신호 인터페이스 모듈</h3>
              <img
                className="card-image"
                src="/imgfile/넥밴드.png"
                alt="넥밴드 이미지"
                style={{width: '95%', marginLeft: '30px', marginTop: '20px'}}
              />
              <p className="tech-card-description">
                <ul>
                  <li>"음원 위치 추적 시스템"에서 음향 신호의 흐름을 연결하는 인터페이스 모듈 및 드라이버 개발(ETRI)</li>
                  <li>STM32 / BLE(Bluetooth) 제어 기술</li>
                  <li>Data-Stream 최적화 기술</li>
                  <li>Android APP 개발 기술</li>
                </ul>
              </p>
            </div>

            <div className="tech-card">
              <h3 className="tech-card-title">군집 뇌파 인터페이스 수신 모듈</h3>
              <img
                className="card-image"
                src="/imgfile/군집뇌파.png"
                alt="군집뇌파 이미지"
                style={{width: '95%', marginTop: '20px', marginBottom: '10px'}}
              />
              <p className="tech-card-description">
                <ul>
                  <li>센서 측정 결과 무선 수집 기술(ETRI)</li>
                  <li>실험 쥐의 뇌파 신호를 시스템에 전송하여 쥐의 흥분 상태를 측정</li>
                </ul>
              </p>
            </div>

            <div className="tech-card">
              <h3 className="tech-card-title">5G NR 무선자원블록 측정 시뮬레이터</h3>
              <img
                className="card-image"
                src="/imgfile/5GNR.png"
                alt="5GNR 이미지"
                style={{width: '95%', marginLeft: '20px', marginTop: '10px'}}
              />
              {/* <video className="card-video" controls>
                <source src="/imgfile/5GNR.mp4" type="video/mp4"/>
                브라우저가 동영상을 지원하지 않습니다.
              </video> */}
              <p className="tech-card-description">
                <ul>
                  <li>5G, 4G 기지국의 신호 품질 및 RB 점유율 측정 장치(ETRI)</li>
                </ul>
              </p>
            </div>

            <div className="tech-card">
              <h3 className="tech-card-title">AI기반 빔포밍 테스트베드</h3>
              <img
                className="card-image"
                src="/imgfile/빔포밍.png"
                alt="빔포밍 이미지"
                style={{width: '95%', marginLeft: '20px', marginTop: '10px', marginBottom: '10px'}}
              />
              <p className="tech-card-description">
                <ul>
                  <li>AI기반 beamforming 동작을 구현할 수 있는 테스트베드 구축(ETRI)</li>
                  <li>Zero-forcing beamforming 알고리즘 구현</li>
                  <li>LTE L1 설계 기술</li>
                  <li>LTE R10 MU-MIMO용 beamforming 기술</li>
                  <li>USRP 활용 기술(UHD level API 코딩)</li>
                </ul>
              </p>
            </div>

            <div className="tech-card" >
              <h3 className="tech-card-title">레이다 간섭제거 알고리즘 테스트베드</h3>
              <img
                className="card-image"
                src="/imgfile/레이다간섭제거.png"
                alt="레이다간섭제거 이미지"
                style={{marginTop: '10px', marginBottom: '10px'}}
              />
              <p className="tech-card-description">
                <ul>
                  <li>NI PXle 플랫폼 기반 레이다 신호 생성 및 분석 시스템</li>
                </ul>
              </p>
            </div>

            <div className="tech-card" >
              <h3 className="tech-card-title">임베디드 리눅스 기반 URTDN 디바이스 드라이버</h3>
              <img
                className="card-image"
                src="/imgfile/디바이스드라이버.png"
                alt="디바이스드라이버 이미지"
                style={{width: '95%', marginLeft: '20px', marginTop: '10px', marginBottom: '15px'}}
              />
              <p className="tech-card-description">
                <ul>
                  <li>사용 Wi-Fi 칩을 활용한 오버레이 MAC 구조의 TDMA 구현</li>
                  <li>OpenWRT 기반 customized WLAN MAC 제작</li>
                  <li>MIKROTIK사의 WLAN 모듈 활용</li>
                </ul>
              </p>
            </div>

            <div className="tech-card" >
              <h3 className="tech-card-title">GPU-SDR기반 신호 분석 장비</h3>
              <img
                className="card-image"
                src="/imgfile/신호분석장비.png"
                alt="신호분석장비 이미지"
                style={{width: '95%', marginLeft: '30px', marginTop: '10px', marginBottom: '5px'}}
              />
              <p className="tech-card-description">
                <ul>
                  <li>NI의 USRP series를 이용한 RF 신호 수신 및 down-conversion</li>
                  <li>Nvidia GPU를 이용한 신호 병렬 고속 처리 기술을 활용한 application 구현</li>
                  <li>USRP 및 GPU는 처리요구량에 따라 가변 가능</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Technologies;