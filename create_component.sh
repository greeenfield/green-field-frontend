

# 입력 받기
echo "폴더명 입력"
read folder
echo "컴포넌트명 입력"
read component

set -e


mkdir src/components/$folder
echo "import { S$component } from './$component.style';\n\ninterface ${component}Props {}\n\nconst $component = ({}: ${component}Props) => {\n  return <S$component></S$component>;\n};\n\nexport default $component;" > src/components/$folder/$component.tsx
echo "export { default as $component } from './$component';" > src/components/$folder/index.ts
echo "import styled from '@emotion/styled';\n\nexport const S$component = styled.div\`\`;" > src/components/$folder/$component.style.ts


