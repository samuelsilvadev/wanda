import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Autocomplete } from './autocomplete'
import { Chip, List } from '../..'
import { useEffect, useRef } from 'react'

const story: ComponentMeta<typeof Autocomplete> = {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    invalid: false
  }
}

export default story

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const ref = useRef(null)

  useEffect(() => {
    console.log(ref.current.focus())
  }, [])

  return (
    <>
      <Autocomplete
        ref={ref}
        onChange={(value) => console.log(value)}
        style={{ maxWidth: '300px' }}
        icon="magnifying-glass"
        {...args}
      >
        {[...Array(10)].map((_, i) => (
          <Autocomplete.Option
            icon="compass"
            value={`${i + 1}`}
            key={`key-${Date.now() + i}`}
            decoration={(i === 4) && <Chip dimension="small">Decoration</Chip>}
          >
            Option
            {' '}
            {`${i + 1}`}
          </Autocomplete.Option>
        ))}
      </Autocomplete>
      <List>
        <List.Li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non laboriosam facere? </List.Li>
        <List.Li>Eum, assumenda ad sunt dolorum aspernatur quia sit! Mollitia eligendi accusantium alias non enim quaerat quidem fugiat architecto.</List.Li>
      </List>
    </>
  )
}

export const Default = Template.bind({})

const BusyTemplate: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete
    onChange={(value) => console.log(value)}
    style={{ maxWidth: '300px' }}
    icon="magnifying-glass"
    busy
    {...args}
  />
)

export const Busy = BusyTemplate.bind({})
