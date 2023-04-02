// rollup.config.js
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './main.ts',
  plugins: [
    typescript({ 
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true
      }
    })
  ]
}
