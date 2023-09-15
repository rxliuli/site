import css from './ExperienceView.module.css'
import { Header } from './AboutView'
import { useMemo, useState } from 'preact/compat'
import classNames from 'classnames'
import transition from '../components/TransitionGroup.module.css'
import { useInView } from '../hooks/useInView'
import { TransitionGroup } from '../components/TransitionGroup'
import { Tabs } from '../components/Tabs'
import { useLocale } from '../constants/useI18n'

interface Experience {
  name: string
  link: string
  jobTitle: string
  start: string
  stop?: string
  list: string[]
}

/**
 * @todo tab 移动效果及显示的显隐效果需要实现
 */
export const ExperienceView = () => {
  const { ref, inView } = useInView()
  const { t } = useLocale()
  const experiences: Experience[] = useMemo(
    () => [
      {
        name: t('experience.pinefield.name'),
        link: 'https://www.zhipin.com/gongsi/2328926c2da3d0090XF52tS1GQ~~.html',
        jobTitle: t('experience.pinefield.jobTitle'),
        start: '2021-07',
        stop: t('experience.time.now'),
        list: [
          t('experience.pinefield.item1'),
          t('experience.pinefield.item2'),
          t('experience.pinefield.item3'),
        ],
      },
      {
        name: t('experience.ibingli.name'),
        link: 'https://www.ibingli.cn/',
        jobTitle: t('experience.ibingli.jobTitle'),
        start: '2019.09',
        stop: '2021.03',
        list: [
          t('experience.ibingli.item1'),
          t('experience.ibingli.item2'),
          t('experience.ibingli.item3'),
          t('experience.ibingli.item4'),
          t('experience.ibingli.item5'),
        ],
      },
      {
        name: t('experience.zx-soft.name'),
        link: 'http://www.zx-soft.cn',
        jobTitle: t('experience.zx-soft.jobTitle'),
        start: '2018.03',
        stop: '2019-07',
        list: [
          t('experience.zx-soft.item1'),
          t('experience.zx-soft.item2'),
          t('experience.zx-soft.item3'),
        ],
      },
    ],
    [t],
  )
  const [active, setActive] = useState(experiences[0].name)
  return (
    <div
      ref={ref}
      className={classNames(transition.fadeupEnter, {
        [transition.fadedownEnterActive]: inView,
      })}
    >
      <TransitionGroup>
        <div id={'experience'} className={css.ExperienceView}>
          <Header order={'02.'}>{t('experience.title')}</Header>
          <Tabs active={active} onChange={setActive}>
            {experiences.map((item) => (
              <Tabs.Item key={item.name} title={item.name}>
                <section key={item.name} className={css.content}>
                  <h3>
                    <span>{item.jobTitle}</span>
                    <a href={item.link} target={'_blank'}>
                      {'  '}@{item.name}
                    </a>
                  </h3>
                  <p>
                    {item.start} - {item.stop}
                  </p>
                  <ul>
                    {item.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </Tabs.Item>
            ))}
          </Tabs>
        </div>
      </TransitionGroup>
    </div>
  )
}
