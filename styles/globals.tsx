import { Global, css } from "@emotion/react"

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        height: 100%;
      }
    `}
  />
)
