'use client'

import { useState } from 'react'
import Script from 'next/script'

export default function Home() {
  const [isLibLoaded, setIsLibLoaded] = useState(false)

  return (
    <>
      <Script 
        src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"
        onLoad={() => setIsLibLoaded(true)}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Requerimento para Transferir Registro de Armas
              </h1>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                TRANSFERÊNCIA DE ARMA - SIGMA PARA SIGMA
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Preencha todos os campos abaixo para gerar automaticamente seu PDF
              </p>
            </div>

            {/* Formulário */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Dados do Requerente */}
              <section>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b-2 border-blue-500">
                  📋 Dados do Requerente
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    id="input_cpf_requerente"
                    placeholder="CPF do Requerente *"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_n_cr"
                    placeholder="Nº CR"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="date"
                    id="input_validade_cr"
                    placeholder="Validade CR"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_nome_requerente"
                    placeholder="Nome Completo *"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all md:col-span-3"
                  />
                  <input
                    type="text"
                    id="input_local_trabalho"
                    placeholder="Local de Trabalho/Emprego"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all md:col-span-2"
                  />
                  <input
                    type="text"
                    id="input_profissao"
                    placeholder="Profissão"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_endereco"
                    placeholder="Endereço para Correspondência"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all md:col-span-3"
                  />
                  <input
                    type="text"
                    id="input_bairro"
                    placeholder="Bairro"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_cep"
                    placeholder="CEP"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_cidade"
                    placeholder="Cidade"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_estado"
                    placeholder="Estado (UF)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    id="input_telefone"
                    placeholder="Telefone Principal"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    id="input_email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_clube_filiacao"
                    placeholder="Clube de Filiação"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all md:col-span-3"
                  />
                </div>

                {/* Categoria */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Categoria:
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="input_colecionador"
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Colecionador</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="input_atirador"
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Atirador</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="input_cacador"
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-slate-700 dark:text-slate-300">Caçador</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Dados do Alienante */}
              <section>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b-2 border-purple-500">
                  👤 Dados do Alienante (Vendedor)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    id="input_cpf_alienante"
                    placeholder="CPF do Alienante"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_n_cr_alienante"
                    placeholder="Nº CR do Alienante"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="date"
                    id="input_validade_cr_alienante"
                    placeholder="Validade CR Alienante"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_nome_alienante"
                    placeholder="Nome Completo do Alienante"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all md:col-span-3"
                  />
                  <input
                    type="tel"
                    id="input_telefone_alienante"
                    placeholder="Telefone do Alienante"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    id="input_email_alienante"
                    placeholder="E-mail do Alienante"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all md:col-span-2"
                  />
                </div>
              </section>

              {/* Dados da Arma */}
              <section>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b-2 border-emerald-500">
                  🔫 Dados da Arma
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    id="input_marca"
                    placeholder="Marca da Arma"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_calibre"
                    placeholder="Calibre da Arma"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_n_registro_sigma"
                    placeholder="Número de Registro (SIGMA)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_modelo"
                    placeholder="Modelo da Arma"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_n_serie"
                    placeholder="Número de Série"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    id="input_situacao"
                    placeholder="Situação"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </section>

              {/* Detalhamento do Processo */}
              <section>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b-2 border-amber-500">
                  📝 Detalhamento do Processo
                </h3>
                <textarea
                  id="input_detalhamento"
                  placeholder="Descreva os detalhes do processo de transferência..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </section>

              {/* Botão de Gerar */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gerarPDFPreenchido) {
                      (window as any).gerarPDFPreenchido()
                    } else {
                      alert('Aguarde o carregamento da biblioteca PDF...')
                    }
                  }}
                  disabled={!isLibLoaded}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLibLoaded ? '📄 Gerar e Baixar PDF Preenchido' : '⏳ Carregando biblioteca...'}
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>⚠️ Instruções Importantes:</strong>
                </p>
                <ol className="text-sm text-amber-700 dark:text-amber-300 mt-2 space-y-1 list-decimal list-inside">
                  <li>Coloque o arquivo <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">AUTOMATIZAR.pdf</code> na pasta <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">public/</code></li>
                  <li>O PDF deve ter campos de formulário criados previamente (Adobe Acrobat)</li>
                  <li>Ajuste os nomes dos campos no código conforme os nomes reais do seu PDF</li>
                  <li>Abra o console do navegador (F12) para ver os nomes dos campos disponíveis</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Script de Geração do PDF */}
      <Script id="pdf-generator" strategy="afterInteractive">
        {`
          async function gerarPDFPreenchido() {
            try {
              const { PDFDocument } = PDFLib;
              
              // 1. Obter os dados dos inputs HTML
              const dados = {
                // Dados do Requerente
                cpfRequerente: document.getElementById('input_cpf_requerente').value,
                nCR: document.getElementById('input_n_cr').value,
                validadeCR: document.getElementById('input_validade_cr').value,
                nomeRequerente: document.getElementById('input_nome_requerente').value,
                localTrabalho: document.getElementById('input_local_trabalho').value,
                profissao: document.getElementById('input_profissao').value,
                endereco: document.getElementById('input_endereco').value,
                bairro: document.getElementById('input_bairro').value,
                cep: document.getElementById('input_cep').value,
                cidade: document.getElementById('input_cidade').value,
                estado: document.getElementById('input_estado').value,
                telefone: document.getElementById('input_telefone').value,
                email: document.getElementById('input_email').value,
                clubeFiliacao: document.getElementById('input_clube_filiacao').value,
                colecionador: document.getElementById('input_colecionador').checked,
                atirador: document.getElementById('input_atirador').checked,
                cacador: document.getElementById('input_cacador').checked,
                
                // Dados do Alienante
                cpfAlienante: document.getElementById('input_cpf_alienante').value,
                nCRAlienante: document.getElementById('input_n_cr_alienante').value,
                validadeCRAlienante: document.getElementById('input_validade_cr_alienante').value,
                nomeAlienante: document.getElementById('input_nome_alienante').value,
                telefoneAlienante: document.getElementById('input_telefone_alienante').value,
                emailAlienante: document.getElementById('input_email_alienante').value,
                
                // Dados da Arma
                marcaArma: document.getElementById('input_marca').value,
                calibreArma: document.getElementById('input_calibre').value,
                nRegistroSigma: document.getElementById('input_n_registro_sigma').value,
                modeloArma: document.getElementById('input_modelo').value,
                nSerie: document.getElementById('input_n_serie').value,
                situacao: document.getElementById('input_situacao').value,
                
                // Detalhamento
                detalhamento: document.getElementById('input_detalhamento').value,
              };

              // Verificação básica
              if (!dados.nomeRequerente || !dados.cpfRequerente) {
                alert("⚠️ Preencha ao menos o NOME e o CPF do Requerente.");
                return;
              }

              // 2. Carregar o PDF Padrão
              const resposta = await fetch('/AUTOMATIZAR.pdf');
              if (!resposta.ok) {
                throw new Error('PDF não encontrado. Certifique-se de que o arquivo AUTOMATIZAR.pdf está na pasta public/');
              }
              
              const bytesPDFPadrao = await resposta.arrayBuffer();
              const pdfDoc = await PDFDocument.load(bytesPDFPadrao);
              const form = pdfDoc.getForm();
              
              // 3. Listar campos disponíveis no console (para debug)
              console.log('=== CAMPOS DISPONÍVEIS NO PDF ===');
              const fields = form.getFields();
              fields.forEach(field => {
                const type = field.constructor.name;
                console.log('Campo: "' + field.getName() + '" (Tipo: ' + type + ')');
              });
              console.log('=================================');
              
              // 4. Mapeamento e Preenchimento dos Campos
              // ** SUBSTITUA os nomes abaixo pelos nomes REAIS dos campos do seu PDF **
              // ** Use o console acima para ver os nomes corretos **
              
              try {
                // Exemplo de preenchimento - AJUSTE conforme seu PDF
                const camposPreencher = {
                  // Dados do Requerente
                  'cpf_requerente': dados.cpfRequerente,
                  'n_cr': dados.nCR,
                  'validade_cr': dados.validadeCR,
                  'nome_requerente': dados.nomeRequerente,
                  'local_trabalho': dados.localTrabalho,
                  'profissao': dados.profissao,
                  'endereco': dados.endereco,
                  'bairro': dados.bairro,
                  'cep': dados.cep,
                  'cidade': dados.cidade,
                  'estado': dados.estado,
                  'telefone': dados.telefone,
                  'email': dados.email,
                  'clube_filiacao': dados.clubeFiliacao,
                  
                  // Dados do Alienante
                  'cpf_alienante': dados.cpfAlienante,
                  'n_cr_alienante': dados.nCRAlienante,
                  'validade_cr_alienante': dados.validadeCRAlienante,
                  'nome_alienante': dados.nomeAlienante,
                  'telefone_alienante': dados.telefoneAlienante,
                  'email_alienante': dados.emailAlienante,
                  
                  // Dados da Arma
                  'marca': dados.marcaArma,
                  'calibre': dados.calibreArma,
                  'n_registro_sigma': dados.nRegistroSigma,
                  'modelo': dados.modeloArma,
                  'n_serie': dados.nSerie,
                  'situacao': dados.situacao,
                  
                  // Detalhamento
                  'detalhamento': dados.detalhamento,
                };
                
                // Tentar preencher cada campo
                let camposPreenchidos = 0;
                let camposNaoEncontrados = [];
                
                for (const [nomeCampo, valor] of Object.entries(camposPreencher)) {
                  if (valor) {
                    try {
                      const campo = form.getTextField(nomeCampo);
                      campo.setText(String(valor));
                      camposPreenchidos++;
                    } catch (e) {
                      camposNaoEncontrados.push(nomeCampo);
                    }
                  }
                }
                
                // Checkboxes de categoria
                if (dados.colecionador) {
                  try { form.getCheckBox('colecionador').check(); } catch (e) {}
                }
                if (dados.atirador) {
                  try { form.getCheckBox('atirador').check(); } catch (e) {}
                }
                if (dados.cacador) {
                  try { form.getCheckBox('cacador').check(); } catch (e) {}
                }
                
                console.log('Campos preenchidos: ' + camposPreenchidos);
                if (camposNaoEncontrados.length > 0) {
                  console.warn('Campos não encontrados no PDF:', camposNaoEncontrados);
                  console.warn('Verifique os nomes dos campos no console acima e ajuste o código.');
                }
                
              } catch (fieldError) {
                console.error('Erro ao preencher campos:', fieldError);
                alert('⚠️ Alguns campos não puderam ser preenchidos. Verifique o console (F12) para ver os nomes dos campos disponíveis no seu PDF e ajuste o código.');
              }

              // Opcional: Torna o texto preenchido como parte permanente do PDF
              // form.flatten();

              // 5. Salvar e Forçar o Download
              const bytesPDFPreenchido = await pdfDoc.save();
              const blob = new Blob([bytesPDFPreenchido], { type: 'application/pdf' });
              const url = URL.createObjectURL(blob);

              const link = document.createElement('a');
              link.href = url;
              const dataAtual = new Date().toISOString().slice(0, 10);
              link.download = 'Requerimento_Transferencia_' + (dados.cpfRequerente || dataAtual) + '.pdf';
              
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              
              URL.revokeObjectURL(url);

              alert("✅ PDF de Requerimento gerado e download iniciado com sucesso!");
              
            } catch (error) {
              console.error("❌ Erro ao gerar o PDF:", error);
              alert("❌ Ocorreu um erro: " + error.message + "\\n\\nVerifique o console (F12) para mais detalhes.");
            }
          }
          
          // Expor função globalmente
          window.gerarPDFPreenchido = gerarPDFPreenchido;
        `}
      </Script>
    </>
  )
}
