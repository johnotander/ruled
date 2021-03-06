import React from 'react'

import { Box, Text } from 'axs'
import ruled from 'ruled'

import cx from '../cx'
import Layout from '../components/layout'
import Container from '../components/container'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      config: {
        size: 8,
        strokeWidth: 1,
        horizontal: true,
        vertical: true,
        color: '#cccccc'
      }
    }
  }

  handleChange (key, val) {
    const { config } = this.state
    config[key] = val

    this.setState({ config })
  }

  render () {
    const { config } = this.state

    const sx = {
      backgroundImage: ruled(config),
      backgroundSize: `${config.size}px ${config.size}px`
    }

    return (
      <Layout style={sx}>
        <Container>
          <Box>
            <Text
              display='block'
              gray6
              is='label'
              size6
              children='Stroke Width'
            />
            <Box
              bgWhite
              border
              borderGray4
              display='block'
              is='input'
              name='stokeWidth'
              p1
              rounded
              type='text'
              width={1}
              css={cx.input}
              value={config.strokeWidth}
              onChange={e => this.handleChange('strokeWidth', e.target.value)}
          />
          </Box>
          <Box>
            <Text
              display='block'
              gray6
              is='label'
              size6
              children='Size'
            />
            <Box
              bgWhite
              border
              borderGray4
              display='block'
              is='input'
              name='size'
              p1
              rounded
              type='text'
              width={1}
              css={cx.input}
              value={config.size}
              onChange={e => this.handleChange('size', e.target.value)}
          />
          </Box>
          <Box pt1>
            <Box
              is='input'
              name='horizontal'
              display='inline'
              css={cx.input}
              type='checkbox'
              checked={config.horizontal}
              onChange={e => this.handleChange('horizontal', e.target.checked)}
            />
            <Text
              gray6
              is='label'
              size6
              display='inline'
              children='Horizontal'
            />
            <Box
              ml2
              is='input'
              name='vertical'
              display='inline'
              css={cx.input}
              type='checkbox'
              checked={config.vertical}
              onChange={e => this.handleChange('vertical', e.target.checked)}
            />
            <Text
              gray6
              is='label'
              size6
              display='inline'
              children='Vertical'
            />
            <Box
              ml2
              is='input'
              name='color'
              display='inline'
              css={cx.input}
              type='color'
              value={config.color}
              onChange={e => this.handleChange('color', e.target.checked)}
            />
            <Text
              gray6
              is='label'
              size6
              display='inline'
              children='Color'
            />
          </Box>
          <Box
            is='pre'
            p2
            mb0
            bgGray1
            borderGray2
            css={cx.pre}
            children={`const styles = \{
backgroundImage: '${sx.backgroundImage}',
backgroundSize: '${sx.backgroundSize}'
\}
`} />
        </Container>
      </Layout>
    )
  }
}
