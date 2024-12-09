import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    
    components: {
        card: {
            root: {
                background: '{primary.950}',
                color: '{surface.700}',
                borderRadius: '4rem',
            },
        },
        
            
        
        //   button: {
        //     background: '{primary.950}', // Couleur par défaut
        //     hoverBackground: '{primary.900}', // Couleur au survol
        //     activeBackground: '{primary.800}', // Couleur à l'état actif
        //     hoverBorderColor: '{primary.900}', // Bordure au survol
        //     borderRadius: '4rem',
        //   },
    },
    semantic: {
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#DFFF00', // Chartreuse
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#ff5000', // Rouge vif pour le test
        },
  

    
   
  },
  
});

export default MyPreset;