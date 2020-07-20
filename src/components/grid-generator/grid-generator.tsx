import { chunk } from 'lodash'
import * as React from 'react'
import { Col, Row, Grid } from 'react-flexbox-grid'
type GridGeneratorProps = {
  cols: 1 | 2 | 3 | 4 | 6 | 12
}
export const GridGenerator: React.FC<GridGeneratorProps> = ({ cols, children }) => {

  const colWidth = 12 / cols
  const rows = chunk(React.Children.toArray(children), cols)
  return (
    <Grid>
      {rows.map((cols, idx) => (
        <React.Fragment key={idx}>
          <Row>
            {cols.map((col, id) => (
              <React.Fragment key={id}>
                <Col sm={12} md={colWidth}>
                  {col}
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </React.Fragment>
      ))}
    </Grid>
  )
};