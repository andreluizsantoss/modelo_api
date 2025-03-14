module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Caminho completo para evitar problemas de resolução
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'], // Simplificado o nome do plugin
  extends: [
    'plugin:@typescript-eslint/recommended', // Regras recomendadas do TypeScript
    'plugin:prettier/recommended',          // Integração com o Prettier
  ],
  root: true, // Indica que esta é a configuração raiz do projeto
  env: {
    node: true, // Configuração para projetos Node.js
    jest: true, // Configuração para ambientes de teste com Jest
  },
  ignorePatterns: [
    '.eslintrc.js',          // Ignora o próprio arquivo de configuração
    'prisma/prisma-primary/**', // Ignora diretórios especificados
    'prisma/prisma-second/**',
  ],
  ignores: [
    'node_modules',
    'dist',
    'build',
    '*.js', // Arquivos JS na raiz
    'prisma/prisma-primary/**',
    'prisma/prisma-second/**',
  ],
  rules: {
    // Regras ajustadas
    '@typescript-eslint/interface-name-prefix': 'off', // Regra obsoleta e desativada
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // Ajustado para exibir aviso, útil para detectar variáveis não utilizadas
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    'prettier/prettier': [
      'error', // Garante que o código siga as regras do Prettier
      {
        endOfLine: 'auto', // Resolve conflitos de estilo de fim de linha
      },
    ],
  },
};
