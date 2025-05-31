import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MapPin, Shield, Eye, Database, Clock, Lock, Users, FileText, AlertTriangle } from 'lucide-react';

const PoliticaPrivacidade = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const Section = ({ id, title, children, isImportant = false, icon }) => {
    const isExpanded = expandedSections[id];
    
    return (
      <div className={`card mb-4 ${isImportant ? 'border-danger' : ''}`}>
        <div className={`card-header ${isImportant ? 'bg-danger bg-opacity-10' : 'bg-light'}`}>
          <button
            onClick={() => toggleSection(id)}
            className={`btn w-100 text-start d-flex justify-content-between align-items-center p-0 ${
              isImportant ? 'btn-outline-danger' : 'btn-light'
            }`}
            style={{ border: 'none', boxShadow: 'none' }}
            aria-expanded={isExpanded}
            aria-controls={`section-${id}`}
          >
            <h2 className={`policy-heading mb-0 d-flex align-items-center ${isImportant ? 'text-danger' : ''}`}>
              {icon && <span className="me-2">{icon}</span>}
              {title}
            </h2>
            {isExpanded ? (
              <ChevronUp className="text-muted" size={20} />
            ) : (
              <ChevronDown className="text-muted" size={20} />
            )}
          </button>
        </div>
        {isExpanded && (
          <div id={`section-${id}`} className="card-body">
            <div className={isImportant ? 'text-danger' : ''}>
              {children}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{`
        :root {
          --color-primary-2: #00ba60ff;
          --color-primary-2-200: #33c880ff;
          --color-primary-2-400: #66d6a0ff;
          --color-primary-2-600: #99e3bfff;
          --color-primary-1: #0c1c30ff;
          --color-primary-1-200: #3d4959ff;
          --color-primary-1-400: #6d7783ff;
          --color-primary-1-600: #9ea4acff;
          --color-whyte: #ffffffff;
          --color-backgroundpage: #f5f5f5ff;
          --color-oddscolor: #ffca00ff;
          --color-wrongbet: #fc0606ff;
          --gradient-presentation: linear-gradient(180deg, #ebffea66 0%, #ffffffff 100%);
          --font-headings: 16px Poppins, sans-serif;
          --font-current: 12px Poppins, sans-serif;
          --font-headings-bold: 16px Poppins, sans-serif;
          --font-headingpage: Poppins, sans-serif;
          --font-currentbold: 12px Poppins, sans-serif;
        }

        body {
          background-color: var(--color-backgroundpage);
          font-family: var(--font-current);
        }

        .color_primary{
          color: var(--color-primary-2);
        }

        .color-secondary{
          color: var(--color-primary-1);
        }

        h1{
          font-family: var(--font-headingpage) !important;
          font-size: 40px;
          font-weight: bolder;
          color: var(--color-primary-1);
        }

        h2.policy-heading{
          font-size: 20px !important;
          font-weight: bold !important;
          color: var(--color-primary-2) !important;
          margin-bottom: 1rem;  
          text-shadow: none;  
        }

        h3.section-subheading{
          font-size: 18px !important;
          font-weight: bold !important;
          color: var(--color-primary-1) !important;
          margin-bottom: 0.75rem;
        }

        h4.subsection-heading{
          font-size: 16px !important;
          font-weight: bold !important;
          color: var(--color-primary-1-200) !important;
          margin-bottom: 0.5rem;
        }

        p{
          font-family: var(--font-current);
          font-size: 16px;
          padding: 0 !important;
        }

        .btn-cta {
          background-color: var(--color-primary-2);
          color: var(--color-whyte);
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-family: var(--font-headings);
          transition: all 0.3s ease;
          white-space: nowrap;
          font-weight: bolder;
        }

        .btn-cta:hover {
          background-color: var(--color-primary-2-200);
          color: var(--color-whyte);
        }

        .card {
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          border-radius: 8px;
        }

        .alert-custom-warning {
          background-color: #fff3cd;
          border-color: #ffeaa7;
          color: #856404;
        }

        .alert-custom-info {
          background-color: #d1ecf1;
          border-color: #bee5eb;
          color: #0c5460;
        }

        .alert-custom-success {
          background-color: #d4edda;
          border-color: #c3e6cb;
          color: #155724;
        }

        .alert-custom-danger {
          background-color: #f8d7da;
          border-color: #f5c6cb;
          color: #721c24;
        }

        .badge-custom {
          background-color: var(--color-primary-2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
        }

        .badge-secondary {
          background-color: var(--color-primary-1-400);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
        }

        .footer {
          background-color: var(--color-primary-2);
          color: var(--color-whyte);
          padding: 2rem;
          margin-top: 2rem;
          border-radius: 8px 8px 0 0;
        }

        .info-item {
          background-color: #e8f5e8;
          border: 1px solid #c3e6cb;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 0.5rem;
          color: #155724;
        }

        .info-item .icon {
          color: var(--color-primary-2);
          font-weight: bold;
          margin-right: 0.5rem;
        }

        .privacy-highlight {
          background-color: #f0f9ff;
          border: 1px solid #bee5eb;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 0.5rem;
          color: #0c5460;
        }

        a {
          color: var(--color-primary-2);
          text-decoration: none;
        }

        a:hover {
          color: var(--color-primary-2-200);
          text-decoration: underline;
        }

        .text-small {
          font-size: 0.875rem;
        }

        .company-info {
          background-color: var(--color-backgroundpage);
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid #e9ecef;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 3.5rem;
          }
        }
      `}</style>
      
      <div className="min-vh-100" style={{ backgroundColor: 'var(--color-backgroundpage)' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              
              {/* Header */}
              <div className="card mb-4 shadow-sm">
                <div className="card-body p-4">
                  <h1 className="mb-4">Política de Privacidade</h1>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-auto">
                      <span className="badge-custom">
                        <strong>Última atualização:</strong> 06 de maio de 2025
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="badge-secondary">
                        <strong>Idade mínima:</strong> 18 anos
                      </span>
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="company-info mb-4">
                    <h2 className="policy-heading">BetLearn - Informações da Empresa</h2>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <MapPin className="text-muted me-2 mt-1" size={16} />
                          <div>
                            <p className="fw-bold mb-1">Endereço:</p>
                            <p className="text-muted mb-0 text-small">
                              Campus Universitário de Santiago<br />
                              Universidade de Aveiro<br />
                              Aveiro, Aveiro 3810-193, Portugal
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start">
                          <Mail className="text-muted me-2 mt-1" size={16} />
                          <div>
                            <p className="fw-bold mb-1">E-mail:</p>
                            <a href="mailto:betlearn2@gmail.com" className="text-small">
                              betlearn2@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-custom-info" style={{ borderColor: 'var(--color-primary-2)' }}>
                    <h3 className="fw-bold color_primary mb-2">Sobre este Aviso de Privacidade</h3>
                    <p className="mb-2 text-small">
                      Este Aviso de Privacidade para a BetLearn descreve como e porque podemos aceder, recolher, armazenar, usar e/ou partilhar a sua informação pessoal quando usa os nossos serviços.
                    </p>
                    <p className="mb-0 text-small">
                      <strong>Dúvidas ou preocupações?</strong> A leitura deste Aviso ajudá-lo-á a compreender os seus direitos e opções de privacidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="alert alert-custom-danger border-start border-4 border-danger mb-4">
                <h2 className="fw-bold text-danger mb-3">🔒 Aviso Importante sobre Privacidade</h2>
                <p className="fw-bold mb-2">
                  NÃO RECOLHEMOS INTENCIONALMENTE DADOS DE CRIANÇAS COM MENOS DE 18 ANOS.
                </p>
                <p className="text-small mb-0">
                  Ao utilizar os Serviços, declara que tem pelo menos 18 anos. Se tiver conhecimento de dados recolhidos de menores de 18 anos, contacte-nos imediatamente.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="policy-heading">Índice de Conteúdos</h2>
                  <div className="row g-2">
                    {[
                      'QUE INFORMAÇÕES RECOLHEMOS?',
                      'COMO PROCESSAMOS AS SUAS INFORMAÇÕES?',
                      'EM QUE BASES LEGAIS NOS BASEAMOS?',
                      'QUANDO E COM QUEM PARTILHAMOS AS SUAS INFORMAÇÕES?',
                      'OFERECEMOS PRODUTOS BASEADOS EM IA?',
                      'DURANTE QUANTO TEMPO CONSERVAMOS AS SUAS INFORMAÇÕES?',
                      'COMO MANTEMOS AS SUAS INFORMAÇÕES SEGURAS?',
                      'RECOLHEMOS INFORMAÇÕES DE MENORES?',
                      'QUAIS SÃO OS SEUS DIREITOS DE PRIVACIDADE?',
                      'CONTROLOS PARA FUNCIONALIDADES DE NÃO RASTREIO',
                      'DIREITOS ESPECÍFICOS PARA RESIDENTES NOS EUA',
                      'FAZEMOS ATUALIZAÇÕES A ESTE AVISO?',
                      'COMO PODE CONTACTAR-NOS?',
                      'COMO PODE REVER, ATUALIZAR OU APAGAR OS DADOS?'
                    ].map((item, index) => (
                      <div key={index} className="col-md-6">
                        <div className="p-2 rounded hover-bg-light">
                          <span className="text-muted text-small me-2">{index + 1}.</span>
                          <span className="text-small">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sections */}
              <Section id="informacoes-recolhemos" title="1. QUE INFORMAÇÕES RECOLHEMOS?" icon={<Database size={20} />}>
                <h3 className="section-subheading">Informações pessoais que nos divulga</h3>
                <p className="mb-4">
                  Recolhemos as informações pessoais que o utilizador nos fornece voluntariamente quando se regista nos Serviços ou quando nos contacta.
                </p>

                <div className="info-item mb-3">
                  <div className="icon">📝</div>
                  <h4 className="subsection-heading">Informações pessoais fornecidas pelo utilizador:</h4>
                  <ul className="text-small mb-0">
                    <li>Nomes</li>
                    <li>Endereços de correio eletrónico</li>
                    <li>Nomes de utilizador</li>
                    <li>Palavras-passe</li>
                    <li>Rendimento médio</li>
                  </ul>
                </div>

                <div className="privacy-highlight mb-3">
                  <div className="icon">🔐</div>
                  <h4 className="subsection-heading">Informações sensíveis:</h4>
                  <ul className="text-small mb-0">
                    <li>Dados financeiros</li>
                    <li>Dados de aplicação</li>
                  </ul>
                </div>

                <div className="company-info mb-3">
                  <h4 className="subsection-heading">Dados de aplicação:</h4>
                  <p className="text-small mb-0">
                    Se utilizar a nossa aplicação, também poderemos recolher notificações push, se optar por nos dar acesso ou permissão. Pode desativar estas comunicações nas definições do seu dispositivo.
                  </p>
                </div>

                <div className="alert alert-custom-info">
                  <h4 className="fw-bold color_primary mb-2">API do Google</h4>
                  <p className="text-small mb-0">
                    A nossa utilização das informações recebidas das APIs do Google respeitará a Política de dados do utilizador dos serviços de API do Google.
                  </p>
                </div>
              </Section>

              <Section id="como-processamos" title="2. COMO PROCESSAMOS AS SUAS INFORMAÇÕES?" icon={<Eye size={20} />}>
                <p className="mb-4">
                  Processamos as suas informações para fornecer, melhorar e administrar os nossos Serviços, comunicar com o utilizador, para segurança e prevenção de fraudes e para cumprir a lei.
                </p>
                
                <div className="info-item">
                  <div className="icon">⚙️</div>
                  <p className="text-small mb-0">
                    Processamos as suas informações pessoais por vários motivos, incluindo para facilitar a criação e autenticação de contas, gerir contas de utilizador, e para salvar ou proteger os interesses vitais de um indivíduo quando necessário.
                  </p>
                </div>
              </Section>

              <Section id="bases-legais" title="3. EM QUE BASES LEGAIS NOS BASEAMOS?" icon={<FileText size={20} />}>
                <p className="mb-4">
                  Apenas processamos as suas informações pessoais quando temos uma razão legal válida para o fazer, incluindo:
                </p>
                
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">✅</div>
                      <h4 className="subsection-heading">Consentimento</h4>
                      <p className="text-small mb-0">Quando nos dá autorização para utilizar as suas informações pessoais para um fim específico</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">⚖️</div>
                      <h4 className="subsection-heading">Obrigações legais</h4>
                      <p className="text-small mb-0">Para cumprimento das nossas obrigações legais</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">🛡️</div>
                      <h4 className="subsection-heading">Interesses vitais</h4>
                      <p className="text-small mb-0">Para proteger os seus interesses vitais ou os de terceiros</p>
                    </div>
                  </div>
                </div>
              </Section>

              <Section id="partilha-informacoes" title="4. QUANDO E COM QUEM PARTILHAMOS AS SUAS INFORMAÇÕES?" icon={<Users size={20} />}>
                <div className="privacy-highlight">
                  <div className="icon">📤</div>
                  <p className="text-small mb-0">
                    Poderemos ter de partilhar as suas informações pessoais em situações específicas, incluindo transferências comerciais durante fusões, vendas de ativos, financiamento ou aquisições da nossa atividade.
                  </p>
                </div>
              </Section>

              <Section id="inteligencia-artificial" title="5. OFERECEMOS PRODUTOS BASEADOS EM IA?" icon={<Shield size={20} />}>
                <p className="mb-4">
                  Sim, oferecemos produtos, funcionalidades ou ferramentas baseadas em inteligência artificial através de fornecedores de serviços terceiros, incluindo o Google Cloud AI.
                </p>
                
                <div className="alert alert-custom-info">
                  <h4 className="fw-bold color_primary mb-2">Produtos AI</h4>
                  <p className="text-small mb-0">
                    Os nossos produtos AI foram concebidos para funcionalidades de conhecimento e todas as informações pessoais são tratadas de acordo com a nossa Política de Privacidade.
                  </p>
                </div>
              </Section>

              <Section id="tempo-conservacao" title="6. DURANTE QUANTO TEMPO CONSERVAMOS AS SUAS INFORMAÇÕES?" icon={<Clock size={20} />}>
                <div className="privacy-highlight">
                  <div className="icon">⏰</div>
                  <p className="text-small mb-0">
                    Conservamos as suas informações pessoais apenas durante o tempo necessário para os fins definidos nesta Política, durante o período em que tem uma conta connosco, ou conforme exigido por lei.
                  </p>
                </div>
              </Section>

              <Section id="seguranca" title="7. COMO MANTEMOS AS SUAS INFORMAÇÕES SEGURAS?" icon={<Lock size={20} />}>
                <div className="alert alert-custom-success">
                  <h4 className="fw-bold mb-2" style={{ color: '#155724' }}>🔒 Medidas de Segurança</h4>
                  <p className="text-small mb-2">
                    Implementámos medidas de segurança técnicas e organizacionais adequadas para proteger as suas informações pessoais.
                  </p>
                  <p className="text-small mb-0">
                    <strong>Nota:</strong> No entanto, nenhuma transmissão eletrónica pode ser garantida como 100% segura. Aceda aos Serviços apenas num ambiente seguro.
                  </p>
                </div>
              </Section>

              <Section id="menores" title="8. RECOLHEMOS INFORMAÇÕES DE MENORES?" isImportant={true} icon={<AlertTriangle size={20} />}>
                <div className="alert alert-custom-danger">
                  <p className="fw-bold mb-2">
                    NÃO RECOLHEMOS INTENCIONALMENTE DADOS DE CRIANÇAS COM MENOS DE 18 ANOS.
                  </p>
                  <p className="text-small mb-0">
                    Ao utilizar os Serviços, declara que tem pelo menos 18 anos. Se tiver conhecimento de dados recolhidos de menores de 18 anos, contacte-nos através de{' '}
                    <a href="mailto:betlearn2@gmail.com">betlearn2@gmail.com</a>.
                  </p>
                </div>
              </Section>

              <Section id="direitos-privacidade" title="9. QUAIS SÃO OS SEUS DIREITOS DE PRIVACIDADE?" icon={<Shield size={20} />}>
                <p className="mb-4">
                  Dependendo da sua localização, pode ter os seguintes direitos:
                </p>
                
                <div className="row g-3 mb-4">
                  {[
                    { icon: '📋', title: 'Acesso', desc: 'Solicitar o acesso e obter uma cópia das suas informações pessoais' },
                    { icon: '✏️', title: 'Retificação', desc: 'Solicitar a retificação ou eliminação' },
                    { icon: '⏸️', title: 'Restrição', desc: 'Restringir o processamento das suas informações pessoais' },
                    { icon: '📤', title: 'Portabilidade', desc: 'Portabilidade dos dados (se aplicável)' },
                    { icon: '🤖', title: 'Decisões automatizadas', desc: 'Não estar sujeito a decisões automatizadas' },
                    { icon: '🚫', title: 'Oposição', desc: 'Opor-se ao processamento das suas informações pessoais' }
                  ].map((right, index) => (
                    <div key={index} className="col-md-6">
                      <div className="info-item">
                        <div className="icon">{right.icon}</div>
                        <h4 className="subsection-heading">{right.title}</h4>
                        <p className="text-small mb-0">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="company-info mb-4">
                  <h3 className="section-subheading">Como exercer os seus direitos:</h3>
                  <p className="text-small mb-2">
                    Pode exercer estes direitos contactando-nos através de{' '}
                    <a href="mailto:betlearn2@gmail.com">betlearn2@gmail.com</a>{' '}
                    ou iniciando sessão nas definições da sua conta.
                  </p>
                  
                  <h4 className="subsection-heading">Retirar o consentimento:</h4>
                  <p className="text-small mb-0">
                    Tem o direito de retirar o seu consentimento em qualquer altura, contactando-nos através dos dados fornecidos.
                  </p>
                </div>
              </Section>

              <Section id="nao-rastrear" title="10. CONTROLOS PARA FUNCIONALIDADES DE NÃO RASTREIO">
                <div className="privacy-highlight">
                  <div className="icon">🚫</div>
                  <p className="text-small mb-0">
                    Atualmente não respondemos aos sinais DNT (Do-Not-Track) do navegador, uma vez que não foi finalizada nenhuma norma tecnológica uniforme para reconhecer e implementar estes sinais.
                  </p>
                </div>
              </Section>

              <Section id="residentes-eua" title="11. DIREITOS ESPECÍFICOS PARA RESIDENTES NOS EUA">
                <p className="mb-4">
                  Se for residente em determinados estados dos EUA, pode ter direitos adicionais de privacidade, incluindo:
                </p>
                
                <div className="row g-3">
                  {[
                    'Direito de saber se estamos a processar os seus dados pessoais',
                    'Direito de aceder aos seus dados pessoais',
                    'Direito de corrigir imprecisões',
                    'Direito de solicitar a eliminação',
                    'Direito à não-discriminação',
                    'Direito de recusar tratamento para publicidade direcionada'
                  ].map((right, index) => (
                    <div key={index} className="col-md-6">
                      <div className="info-item">
                        <div className="icon">🇺🇸</div>
                        <p className="text-small mb-0">{right}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="atualizacoes" title="12. FAZEMOS ATUALIZAÇÕES A ESTE AVISO?">
                <div className="alert alert-custom-warning">
                  <h4 className="fw-bold mb-2">📋 Atualizações da Política</h4>
                  <p className="text-small mb-0">
                    Sim, podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada por uma data "Última atualização" no topo desta página. Recomendamos que reveja esta política frequentemente.
                  </p>
                </div>
              </Section>

              <Section id="gestao-dados" title="14. COMO PODE REVER, ATUALIZAR OU APAGAR OS DADOS?">
                <div className="company-info">
                  <h4 className="subsection-heading">Direito de Gestão de Dados</h4>
                  <p className="text-small mb-0">
                    Tem o direito de solicitar o acesso às informações pessoais que recolhemos sobre si, corrigir imprecisões ou eliminar as suas informações pessoais. Para solicitar, preencha e envie um pedido de acesso ao titular dos dados através do nosso email de contacto.
                  </p>
                </div>
              </Section>

              {/* Contact Section */}
              <div className="card shadow-sm mt-4">
                <div className="card-body">
                  <h2 className="policy-heading d-flex align-items-center">
                    <Mail className="me-2" size={20} />
                    Contacte-nos
                  </h2>
                  <p className="mb-4">
                    Para questões sobre este Aviso de Privacidade ou para exercer os seus direitos de privacidade:
                  </p>
                  <div className="company-info">
                    <div className="text-small">
                      <p className="fw-bold">BetLearn</p>
                      <p>Campus Universitário de Santiago, Universidade de Aveiro</p>
                      <p>Aveiro, Aveiro 3810-193, Portugal</p>
                      <p>
                        <strong>E-mail:</strong>{' '}
                        <a href="mailto:betlearn2@gmail.com">
                          betlearn2@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="footer text-center mt-4">
                <p className="text-small mb-2">
                  Esta política de privacidade foi atualizada pela última vez em 06 de maio de 2025.
                </p>
                <p className="text-small mb-0" style={{ opacity: 0.8 }}>
                  © 2025 BetLearn. Todos os direitos reservados.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;