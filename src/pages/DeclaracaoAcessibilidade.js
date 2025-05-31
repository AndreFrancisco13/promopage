import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MapPin, Shield, Eye, Database, Clock, Lock, Users, FileText, AlertTriangle, Accessibility, CheckCircle, Settings, Phone } from 'lucide-react';

const DeclaracaoAcessibilidade = () => {
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
          font-family: 'Poppins', sans-serif;
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
                  <h1 className="mb-4">Declaração de Acessibilidade e Usabilidade</h1>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-auto">
                      <span className="badge-custom">
                        <strong>Última atualização:</strong> 06 de maio de 2025
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="badge-secondary">
                        <strong>Conformidade:</strong> WCAG 2.1 AA
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
                    <h3 className="fw-bold color_primary mb-2">Compromisso com a Acessibilidade</h3>
                    <p className="mb-2 text-small">
                      A BetLearn compromete-se a disponibilizar a sua aplicação móvel em conformidade com o Decreto-Lei n.º 83/2018, de 19 de outubro, que transpõe a Diretiva (UE) 2016/2102 do Parlamento Europeu e do Conselho.
                    </p>
                    <p className="mb-0 text-small">
                      <strong>Objetivo:</strong> Garantir a acessibilidade dos sítios Web e das aplicações móveis para todos os utilizadores.
                    </p>
                  </div>
                </div>
              </div>

              {/* Estado de Conformidade */}
              <div className="alert alert-custom-success mb-4" >
                <h2 className="fw-bold mb-3" style={{ color: 'var(--color-primary-2)' }}>
                  <CheckCircle className="me-2" size={24} />
                  Estado de Conformidade
                </h2>
                <p className="fw-bold mb-2" style={{ color: '#155724' }}>
                  A aplicação móvel BetLearn está PLENAMENTE CONFORME com o Decreto-Lei n.º 83/2018, de 19 de outubro.
                </p>
                <p className="text-small mb-0">
                  Cumprimos integralmente os requisitos de acessibilidade estabelecidos pela legislação portuguesa e europeia.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="policy-heading">Índice de Conteúdos</h2>
                  <div className="row g-2">
                    {[
                      'ELABORAÇÃO DA DECLARAÇÃO',
                      'AVALIAÇÕES AUTOMÁTICAS',
                      'AVALIAÇÕES MANUAIS',
                      'TESTES DE USABILIDADE',
                      'CONTACTO E INFORMAÇÕES',
                      'OUTRAS EVIDÊNCIAS',
                      'DENÚNCIA DE DISCRIMINAÇÃO'
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
              <Section id="elaboracao" title="I. ELABORAÇÃO DA PRESENTE DECLARAÇÃO" icon={<FileText size={20} />}>
                <p className="mb-4">
                  De acordo com o artigo 9.º do Decreto-Lei n.º 83/2018, devem ser adotados os seguintes procedimentos de monitorização:
                </p>

                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">🔍</div>
                      <h4 className="subsection-heading">Procedimento A</h4>
                      <p className="text-small mb-0"><strong>Avaliações automáticas</strong> (Obrigatório)</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">👁️</div>
                      <h4 className="subsection-heading">Procedimento B</h4>
                      <p className="text-small mb-0"><strong>Avaliações manuais</strong> (Obrigatório)</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="privacy-highlight">
                      <div className="icon">👥</div>
                      <h4 className="subsection-heading">Procedimento C</h4>
                      <p className="text-small mb-0"><strong>Testes com utilizadores</strong> (Recomendado)</p>
                    </div>
                  </div>
                </div>
              </Section>

              <Section id="avaliacoes-automaticas" title="II. AVALIAÇÕES AUTOMÁTICAS LEVADAS A EFEITO" icon={<Settings size={20} />}>
                <div className="company-info mb-4">
                  <h3 className="section-subheading">Relatório: Práticas de Acessibilidade Web (WCAG 2.1 do W3C)</h3>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="info-item">
                        <div className="icon">🛠️</div>
                        <h4 className="subsection-heading">Ferramenta utilizada:</h4>
                        <p className="text-small mb-0">Axe DevTools</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-item">
                        <div className="icon">📊</div>
                        <h4 className="subsection-heading">Amostra:</h4>
                        <p className="text-small mb-0">11 páginas analisadas</p>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-custom-success mt-3">
                    <h4 className="fw-bold mb-2" style={{ color: '#155724' }}>
                      ✅ Resultados da Avaliação
                    </h4>
                    <p className="text-small mb-0">
                      <strong>100% das páginas cumprem o nível AA das WCAG 2.1</strong> - Todas as páginas avaliadas demonstram conformidade total com os critérios de acessibilidade.
                    </p>
                  </div>
                </div>
              </Section>

              <Section id="avaliacoes-manuais" title="III. AVALIAÇÕES MANUAIS LEVADAS A EFEITO" icon={<Eye size={20} />}>
                <p className="mb-4">
                  A aplicação BetLearn foi avaliada em termos de acessibilidade através de testes manuais, baseando-se em três checklists fundamentais:
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">⚙️</div>
                      <h4 className="subsection-heading">Aspeto Funcional</h4>
                      <p className="text-small mb-0">Navegação, interatividade e funcionalidades</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">📝</div>
                      <h4 className="subsection-heading">Clareza do Conteúdo</h4>
                      <p className="text-small mb-0">Legibilidade, estrutura e organização</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-item">
                      <div className="icon">🤝</div>
                      <h4 className="subsection-heading">Processos de Interação</h4>
                      <p className="text-small mb-0">Usabilidade e experiência do utilizador</p>
                    </div>
                  </div>
                </div>

                <div className="alert alert-custom-success mb-3">
                  <h4 className="fw-bold mb-2" style={{ color: '#155724' }}>✅ Pontos Fortes Identificados</h4>
                  <ul className="text-small mb-0">
                    <li>Navegação por teclado eficiente</li>
                    <li>Compatibilidade com leitores de ecrã</li>
                    <li>Contraste adequado de cores</li>
                    <li>Imagens com descrições alternativas</li>
                    <li>Estrutura clara e organizada do conteúdo</li>
                  </ul>
                </div>

                <div className="alert alert-custom-warning">
                  <h4 className="fw-bold mb-2">⚠️ Oportunidades de Melhoria</h4>
                  <ul className="text-small mb-0">
                    <li>Aperfeiçoamento das legendas</li>
                    <li>Estruturação mais detalhada dos cabeçalhos</li>
                  </ul>
                </div>
              </Section>

              <Section id="testes-usabilidade" title="IV. TESTES DE USABILIDADE COM PESSOAS COM DEFICIÊNCIA" icon={<Users size={20} />}>
                <div className="privacy-highlight">
                  <div className="icon">👥</div>
                  <p className="text-small mb-2">
                    <strong>Estado atual:</strong> A aplicação móvel BetLearn ainda não foi alvo de testes com utilizadores com deficiência.
                  </p>
                  <p className="text-small mb-0">
                    Estamos a planear a implementação destes testes para uma futura versão, visando melhorar continuamente a experiência de todos os utilizadores.
                  </p>
                </div>
              </Section>

              <Section id="contacto-informacao" title="V. CONTACTO E SOLICITAÇÃO DE INFORMAÇÃO" icon={<Mail size={20} />}>
                <p className="mb-4">
                  Para contactar, enviar sugestões, efetuar reclamações ou solicitar informações adicionais relativamente aos conteúdos e/ou funcionalidades da aplicação BetLearn:
                </p>

                <div className="company-info">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <Mail className="text-muted me-2 mt-1" size={16} />
                        <div>
                          <p className="fw-bold mb-1">Correio eletrónico:</p>
                          <a href="mailto:betlearn2@gmail.com" className="text-small">
                            betlearn2@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
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
                  </div>
                </div>
              </Section>

              <Section id="outras-evidencias" title="VI. OUTRAS EVIDÊNCIAS" icon={<Database size={20} />}>
                <div className="privacy-highlight">
                  <div className="icon">📋</div>
                  <p className="text-small mb-0">
                    Atualmente, não foram apresentadas outras evidências ou esforços adicionais para garantir a conformidade da aplicação com os requisitos de acessibilidade constantes do Decreto-Lei n.º 83/2018, de 19 de outubro.
                  </p>
                </div>
              </Section>

              <Section id="denuncia-discriminacao" title="VII. DENÚNCIA DE SITUAÇÕES DE DISCRIMINAÇÃO" isImportant={true} icon={<AlertTriangle size={20} />}>
                <div className="alert alert-custom-info mb-4">
                  <h4 className="fw-bold color_primary mb-2">Instituto Nacional para a Reabilitação (INR, I.P.)</h4>
                  <p className="text-small mb-0">
                    De acordo com o artigo 13.º do Decreto-Lei n.º 83/2018, de 19 de outubro, qualquer pessoa que seja alvo de discriminação em razão de deficiência pode apresentar queixa através do INR, I.P.
                  </p>
                </div>

                <div className="company-info mb-3">
                  <h4 className="subsection-heading">Como denunciar:</h4>
                  <ul className="text-small mb-3">
                    <li>O INR, I.P. disponibiliza um formulário para denunciar situações de discriminação</li>
                    <li>As queixas apresentadas são encaminhadas às entidades competentes</li>
                    <li>É elaborado anualmente um relatório sobre a aplicação da Lei n.º 46/2006, de 28 de agosto</li>
                  </ul>
                  
                  <div className="privacy-highlight">
                    <div className="icon">⚖️</div>
                    <p className="text-small mb-0">
                      <strong>Lei n.º 46/2006:</strong> Proíbe e pune a discriminação em razão da deficiência e do risco agravado de saúde.
                    </p>
                  </div>
                </div>
              </Section>

              {/* Contact Section */}
              <div className="card shadow-sm mt-4">
                <div className="card-body">
                  <h2 className="policy-heading d-flex align-items-center">
                    <Accessibility className="me-2" size={20} />
                    Compromisso Contínuo
                  </h2>
                  <p className="mb-4">
                    A BetLearn mantém um compromisso contínuo com a melhoria da acessibilidade e usabilidade da sua aplicação:
                  </p>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="info-item">
                        <div className="icon">🔄</div>
                        <h4 className="subsection-heading">Melhoria Contínua</h4>
                        <p className="text-small mb-0">Avaliação e atualização regular dos padrões de acessibilidade</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-item">
                        <div className="icon">📞</div>
                        <h4 className="subsection-heading">Suporte Ativo</h4>
                        <p className="text-small mb-0">Resposta rápida a questões e sugestões de acessibilidade</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="company-info mt-4">
                    <div className="text-small">
                      <p className="fw-bold">Para questões de acessibilidade:</p>
                      <p>
                        <strong>E-mail:</strong>{' '}
                        <a href="mailto:betlearn2@gmail.com">
                          betlearn2@gmail.com
                        </a>
                      </p>
                      <p className="mb-0">
                        <strong>Assunto:</strong> Acessibilidade - BetLearn
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="footer text-center mt-4">
                <p className="text-small mb-2">
                  Esta declaração de acessibilidade foi atualizada pela última vez em 06 de maio de 2025.
                </p>
                <p className="text-small mb-0" style={{ opacity: 0.8 }}>
                  © 2025 BetLearn. Comprometidos com a acessibilidade para todos.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeclaracaoAcessibilidade;