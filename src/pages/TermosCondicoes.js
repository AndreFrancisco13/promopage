import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MapPin, Phone } from 'lucide-react';

const TermosCondicoes = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const Section = ({ id, title, children, isImportant = false }) => {
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
            <h2 className={`policy-heading mb-0 ${isImportant ? 'text-danger' : ''}`}>
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

        .prohibited-item {
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 0.5rem;
          color: #721c24;
        }

        .prohibited-item .icon {
          color: #dc3545;
          font-weight: bold;
          margin-right: 0.5rem;
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
                  <h1 className="mb-4">Termos e Condições</h1>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-auto">
                      <span className="badge-custom">
                        <strong>Última atualização:</strong> 07 de abril de 2025
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

                  <div className="alert alert-custom-info " style={{ borderColor: 'var(--color-primary-2)' }}>
                    <h3 className="fw-bold color_primary mb-2">Sobre a BetLearn</h3>
                    <p className="mb-0 text-small">
                      Aplicação sandbox dirigida para apostadores iniciantes, onde os utilizadores podem cumprir desafios relacionados com apostas, desbloquear cenários mais complexos e subir no ranking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="alert alert-custom-danger border-start border-4 border-danger mb-4">
                <h2 className="fw-bold text-danger mb-3">⚠️ Aviso Importante</h2>
                <p className="fw-bold mb-2">
                  SE NÃO CONCORDAR COM TODOS ESSES TERMOS LEGAIS, ENTÃO ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE INTERROMPER O USO IMEDIATAMENTE.
                </p>
                <p className="text-small mb-0">
                  Os Serviços destinam-se a utilizadores com pelo menos 18 anos de idade. Pessoas com idade inferior a 18 anos não estão autorizadas a utilizar ou registar-se nos Serviços.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="policy-heading">Índice de Conteúdos</h2>
                  <div className="row g-2">
                    {[
                      'OS NOSSOS SERVIÇOS',
                      'DIREITOS DE PROPRIEDADE INTELECTUAL',
                      'REPRESENTAÇÕES DO UTILIZADOR',
                      'REGISTO DO UTILIZADOR',
                      'ACTIVIDADES PROIBIDAS',
                      'CONTRIBUIÇÕES GERADAS PELOS UTILIZADORES',
                      'LICENÇA DE CONTRIBUIÇÃO',
                      'LICENÇA DE APLICAÇÃO MÓVEL',
                      'GESTÃO DE SERVIÇOS',
                      'INFRACÇÕES AOS DIREITOS DE AUTOR',
                      'DURAÇÃO E RESCISÃO',
                      'ALTERAÇÕES E INTERRUPÇÕES',
                      'LEGISLAÇÃO APLICÁVEL',
                      'RESOLUÇÃO DE LITÍGIOS',
                      'CORREÇÕES',
                      'ISENÇÃO DE RESPONSABILIDADE',
                      'LIMITAÇÕES DE RESPONSABILIDADE',
                      'INDEMNIZAÇÃO',
                      'DADOS DO UTILIZADOR',
                      'COMUNICAÇÕES ELECTRÓNICAS',
                      'UTILIZADORES DA CALIFÓRNIA',
                      'DIVERSOS',
                      'CONTACTE-NOS'
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
              <Section id="servicos" title="1. OS NOSSOS SERVIÇOS">
                <p className="mb-4">
                  As informações fornecidas ao utilizar os Serviços não se destinam a ser distribuídas ou utilizadas por qualquer pessoa ou entidade em qualquer jurisdição ou país onde essa distribuição ou utilização seja contrária à lei ou regulamento.
                </p>
                <div className="alert alert-custom-warning">
                  <h4 className="fw-bold mb-2">⚠️ Conformidade Regulamentar</h4>
                  <p className="text-small mb-0">
                    Os Serviços não estão adaptados para cumprir regulamentos específicos do sector (HIPAA, FISMA, etc.). Se as suas interações estiverem sujeitas a essas leis, não poderá utilizar os Serviços.
                  </p>
                </div>
              </Section>

              <Section id="propriedade" title="2. DIREITOS DE PROPRIEDADE INTELECTUAL">
                <div className="mb-4">
                  <h4 className="fw-bold mb-2">A nossa propriedade intelectual</h4>
                  <p className="mb-3">
                    Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos Serviços, incluindo todo o código-fonte, bases de dados, funcionalidades, software, designs, áudio, vídeo, texto, fotografias e gráficos.
                  </p>
                </div>
                
                <div className="alert alert-custom-info mb-4">
                  <h4 className="fw-bold color_primary mb-2">Licença de Utilização</h4>
                  <p className="text-small mb-2">Concedemos-lhe uma licença não exclusiva, intransmissível e revogável para:</p>
                  <ul className="text-small mb-0">
                    <li>Aceder aos Serviços</li>
                    <li>Descarregar ou imprimir cópias para utilização pessoal, não comercial</li>
                  </ul>
                </div>

                <div className="company-info">
                  <h4 className="fw-bold mb-2">Os seus envios e contribuições</h4>
                  <p className="text-small mb-2">
                    <strong>Envios:</strong> Ao enviar-nos qualquer conteúdo, concorda em ceder-nos todos os direitos de propriedade intelectual.
                  </p>
                  <p className="text-small mb-0">
                    <strong>Contribuições:</strong> Conteúdos que cria através dos Serviços podem ser visualizados por outros utilizadores.
                  </p>
                </div>
              </Section>

              <Section id="representacoes" title="3. REPRESENTAÇÕES DO UTILIZADOR">
                <p className="mb-4">Ao utilizar os Serviços, o utilizador declara e garante que:</p>
                <ul className="text-small">
                  <li>Todas as informações de registo serão verdadeiras, exactas e completas</li>
                  <li>Manterá a exactidão dessas informações atualizadas</li>
                  <li>Tem capacidade jurídica e concorda em cumprir estes Termos Legais</li>
                  <li>Não é menor de idade na jurisdição em que reside</li>
                  <li>Não acederá aos Serviços através de meios automatizados</li>
                  <li>Não utilizará os Serviços para qualquer fim ilegal</li>
                  <li>A utilização não violará qualquer lei aplicável</li>
                </ul>
              </Section>

              <Section id="registo" title="4. REGISTO DO UTILIZADOR">
                <p className="mb-4">
                  Poderá ser-lhe pedido que se registe para utilizar os Serviços. O utilizador concorda em manter a sua palavra-passe confidencial e será responsável por toda a utilização da sua conta.
                </p>
                <div className="alert alert-custom-warning">
                  <p className="text-small mb-0">
                    <strong>Nota:</strong> Reservamo-nos o direito de remover, reclamar ou alterar um nome de utilizador se determinarmos que é inadequado, obsceno ou censurável.
                  </p>
                </div>
              </Section>

              <Section id="atividades-proibidas" title="5. ACTIVIDADES PROIBIDAS" isImportant={true}>
                <p className="mb-4 fw-bold">
                  Como utilizador dos Serviços, o utilizador concorda em NÃO:
                </p>
                <div>
                  {[
                    'Recuperar sistematicamente dados para criar coleções sem autorização',
                    'Enganar, defraudar ou iludir para obter informações sensíveis',
                    'Contornar funcionalidades de segurança dos Serviços',
                    'Desprezar, manchar ou prejudicar a nós e/ou aos Serviços',
                    'Utilizar informações para assediar, abusar ou prejudicar outras pessoas',
                    'Utilizar indevidamente os serviços de apoio',
                    'Utilizar os Serviços de forma inconsistente com leis aplicáveis',
                    'Carregar vírus, malware ou material prejudicial',
                    'Utilizar sistemas automatizados como bots ou scripts',
                    'Eliminar avisos de direitos de autor',
                    'Fazer-se passar por outro utilizador',
                    'Interferir com o funcionamento dos Serviços',
                    'Assediar funcionários ou agentes',
                    'Copiar ou adaptar o software dos Serviços',
                    'Fazer engenharia reversa do software',
                    'Utilizar para fins comerciais não autorizados',
                    'Vender ou transferir o seu perfil',
                    'Utilizar para publicitar bens e serviços'
                  ].map((item, index) => (
                    <div key={index} className="prohibited-item">
                      <span className="icon">✗</span>
                      <span className="text-small">{item}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="contribuicoes" title="6. CONTRIBUIÇÕES GERADAS PELO UTILIZADOR">
                <p className="mb-4">
                  Os Serviços podem permitir-lhe criar, submeter e partilhar conteúdos. Quando o faz, declara e garante que:
                </p>
                <ul className="text-small">
                  <li>As suas contribuições não infringem direitos de propriedade de terceiros</li>
                  <li>É o criador e proprietário ou tem as licenças necessárias</li>
                  <li>Tem consentimento de pessoas identificáveis nas suas contribuições</li>
                  <li>As contribuições não são falsas, inexactas ou enganosas</li>
                  <li>Não são publicidade não solicitada ou spam</li>
                  <li>Não são obscenas, violentas ou assediantes</li>
                  <li>Não violam leis aplicáveis</li>
                </ul>
              </Section>

              <Section id="licenca-mobile" title="8. LICENÇA DE APLICAÇÃO MÓVEL">
                <p className="mb-4">
                  Se aceder aos Serviços através da Aplicação, concedemos-lhe um direito revogável, não exclusivo e limitado de instalar e utilizar a Aplicação.
                </p>
                
                <div className="company-info mb-4">
                  <h4 className="fw-bold mb-2">Restrições</h4>
                  <p className="text-small mb-2">O utilizador não poderá:</p>
                  <ul className="text-small mb-0">
                    <li>Descompilar ou fazer engenharia reversa da Aplicação</li>
                    <li>Efetuar modificações ou trabalhos derivados</li>
                    <li>Violar leis aplicáveis</li>
                    <li>Remover avisos de propriedade</li>
                    <li>Utilizar para atividades comerciais não autorizadas</li>
                  </ul>
                </div>

                <div className="alert alert-custom-info">
                  <h4 className="fw-bold color_primary mb-2">Dispositivos Apple e Android</h4>
                  <p className="text-small mb-0">
                    Termos específicos aplicam-se quando utiliza a aplicação obtida na Apple Store ou Google Play, incluindo conformidade com as regras dos distribuidores.
                  </p>
                </div>
              </Section>

              <Section id="gestao" title="9. GESTÃO DOS SERVIÇOS">
                <p className="mb-4">Reservamo-nos o direito, mas não a obrigação, de:</p>
                <ul className="text-small">
                  <li>Monitorizar os Serviços quanto a violações</li>
                  <li>Tomar medidas legais contra violadores</li>
                  <li>Recusar, restringir ou desativar contribuições</li>
                  <li>Remover conteúdos excessivos em tamanho</li>
                  <li>Gerir os Serviços para proteger os nossos direitos</li>
                </ul>
              </Section>

              <Section id="duracao" title="11. DURAÇÃO E RESCISÃO" isImportant={true}>
                <p className="fw-bold mb-4">
                  Os presentes Termos Legais permanecerão em vigor enquanto utilizar os Serviços.
                </p>
                
                <div className="alert alert-custom-danger mb-4">
                  <p className="fw-bold mb-2">
                    RESERVAMO-NOS O DIREITO DE NEGAR ACESSO E UTILIZAÇÃO DOS SERVIÇOS A QUALQUER PESSOA, POR QUALQUER MOTIVO, SEM AVISO PRÉVIO.
                  </p>
                  <p className="text-small mb-0">
                    Podemos terminar a sua conta e eliminar qualquer conteúdo a qualquer altura, segundo o nosso critério exclusivo.
                  </p>
                </div>

                <p className="text-small">
                  Se a sua conta for terminada, está proibido de criar uma nova conta, mesmo com nomes diferentes.
                </p>
              </Section>

              <Section id="legislacao" title="13. LEGISLAÇÃO APLICÁVEL">
                <p className="mb-4">
                  Os presentes Termos Legais são regidos pelas leis de <strong>Portugal</strong>.
                </p>
                
                <div className="alert alert-custom-info mb-4">
                  <h4 className="fw-bold color_primary mb-2">Jurisdição</h4>
                  <p className="text-small mb-0">
                    BetLearn e você concordam em submeter-se à jurisdição dos tribunais de <strong>Aveiro</strong>. 
                    Se for residente da UE e consumidor, possui proteção adicional das leis do seu país de residência.
                  </p>
                </div>

                <div className="company-info">
                  <h4 className="fw-bold mb-2">Arbitragem</h4>
                  <p className="text-small mb-2">
                    Litígios serão resolvidos por arbitragem de acordo com o Tribunal Europeu de Arbitragem, com sede em Estrasburgo.
                  </p>
                  <ul className="text-small mb-0">
                    <li><strong>Sede:</strong> Aveiro, Portugal</li>
                    <li><strong>Língua:</strong> Português</li>
                    <li><strong>Lei aplicável:</strong> Lei de Portugal</li>
                  </ul>
                </div>
              </Section>

              <Section id="isencao" title="16. ISENÇÃO DE RESPONSABILIDADE" isImportant={true}>
                <div className="alert alert-custom-warning mb-4">
                  <p className="fw-bold mb-2">
                    OS SERVIÇOS SÃO FORNECIDOS NO ESTADO EM QUE SE ENCONTRAM E CONFORME DISPONÍVEIS.
                  </p>
                  <p className="text-small mb-0">
                    A sua utilização dos Serviços será feita por sua conta e risco.
                  </p>
                </div>
                
                <p className="mb-4 fw-bold">Rejeitamos todas as garantias e não assumimos responsabilidade por:</p>
                <ul className="text-small">
                  <li>Erros ou inexactidões de conteúdos</li>
                  <li>Danos pessoais ou materiais resultantes do seu acesso</li>
                  <li>Acesso não autorizado aos nossos servidores</li>
                  <li>Interrupções de transmissão</li>
                  <li>Vírus ou malware transmitidos por terceiros</li>
                  <li>Perdas resultantes da utilização de qualquer conteúdo</li>
                </ul>
              </Section>

              <Section id="limitacoes" title="17. LIMITAÇÕES DE RESPONSABILIDADE" isImportant={true}>
                <div className="alert alert-custom-danger">
                  <p className="fw-bold mb-2">
                    EM CASO ALGUM SEREMOS RESPONSÁVEIS POR DANOS DIRETOS, INDIRETOS, CONSEQUENCIAIS OU PUNITIVOS.
                  </p>
                  <p className="text-small mb-2">
                    A nossa responsabilidade será sempre limitada ao menor dos montantes:
                  </p>
                  <ul className="text-small mb-0">
                    <li>Montantes pagos nos últimos 3 meses</li>
                    <li>5 Euros</li>
                  </ul>
                </div>
              </Section>

              <Section id="dados" title="19. DADOS DO UTILIZADOR">
                <p className="mb-4">
                  Manteremos determinados dados que transmite aos Serviços para gestão do desempenho e dados de utilização.
                </p>
                
                <div className="alert alert-custom-warning">
                  <h4 className="fw-bold mb-2">⚠️ Responsabilidade dos Dados</h4>
                  <p className="text-small mb-0">
                    É o único responsável por todos os dados que transmite. Não temos responsabilidade por qualquer perda ou corrupção de dados.
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
                    Para resolver uma reclamação relativa aos Serviços ou para receber mais informações:
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
                  Recomendamos que imprima uma cópia destes Termos Legais para seu registo.
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

export default TermosCondicoes;