import { ShadowParams } from '@/types/shadow';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ShadowCodePreviewProps {
  params: ShadowParams;
}

export const ShadowCodePreview: React.FC<ShadowCodePreviewProps> = ({ params }) => {
  const code = `
function generateLongShadow({ length = ${params.length}, angle = ${params.angle}, blur = ${params.blur}, intensity = ${params.intensity}, color = ${params.color} }) {
  const rad = (angle * Math.PI) / 180;
  const shadows = [];
  for (let i = 1; i <= length; i++) {
    const x = Math.round(Math.cos(rad) * i);
    const y = Math.round(Math.sin(rad) * i);
    const alpha = intensity * (1 - i / length);
    shadows.push(\`\${x}px \${y}px \${blur}px rgba(\${color},\${alpha})\`);
  }
  return shadows.join(", ");
}

// applicazione
element.style.textShadow = generateLongShadow({});
  `.trim();

  return (
    <SyntaxHighlighter  className="ls-code-preview" language="javascript" style={vscDarkPlus} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};
