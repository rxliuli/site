import * as React from 'react'
import { createElement } from 'react'
import { Annotations, BaseStory } from '@storybook/addons'
import { Meta, Story } from '@storybook/react'
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'

interface StoryReturnType<T> {
  meta(meta: Meta<T>): Meta<T>
  of(
    annotations?: Annotations<T, StoryFnReactReturnType> &
      Pick<BaseStory<T, T>, 'storyName'>,
  ): Story<T>
}

/**
 * Create a typed story of a given component
 *
 * @example
 * const { meta, of } = story(Button)
 * export default meta({})
 * export const story1 = of({})
 * export const story2 = of({})
 */
export function story<T>(
  Component: React.ComponentType<T>,
): StoryReturnType<T> {
  return {
    meta(meta: Meta<T>) {
      return { ...meta, component: Component }
    },
    of(
      annotations: Annotations<T, StoryFnReactReturnType> &
        Pick<BaseStory<T, T>, 'storyName'> = {},
    ) {
      const copy: Story<T> = (props: T) => createElement(Component, props)
      Object.assign(copy, annotations)
      return copy
    },
  }
}
