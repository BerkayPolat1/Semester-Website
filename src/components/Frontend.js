import React from 'react'
import Navbar from './Navbar'
import './style/frontend.css'
import { data } from './Data'

const isBrowser = typeof window !== `undefined`

//Get position 
//https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj => ilham 
const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = React.useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, deps)
}

//Items
const Item = (props) => {
  const timeItem = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  const checkElement = (el) => {
    var rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  React.useEffect(() => {
    setIsVisible(checkElement(timeItem.current))
  }, [])

  useScrollPosition(({ currPos }) => {
    setIsVisible(checkElement(timeItem.current))
  })
  const { date, content, role, company, location } = props
  return (
    <li ref={timeItem} className={isVisible ? 'inView' : null}>
      <div>
        <time>
          {date.from} - {date.to}
        </time>
        <h4 className="title">{role}</h4>
        <h3 className="company">{company}</h3>
        <p>
          <i>{location}</i>
        </p>
        <p className="description">{content}</p>
      </div>
    </li>
  )
}

// Timeline
const Frontend = (props) => {
  const scrollArea = React.useRef()

  const makeTimeline = (data) => {
    const evlist = props.data.map((item) => {
      return (
        <Item
          date={item.date}
          content={item.content}
          role={item.role}
          company={item.company}
          location={item.location}
          key={`${item.time}`}
        />
      )
    })
    return <ul>{evlist}</ul>
  }

  return (
    <div>
      <Navbar />
      <div className="wrapper" ref={scrollArea}>
        <section className="header">
          <div className="container-home">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </section>
        <section className="timeline">
          <ul>{makeTimeline(data)}</ul>
        </section>
      </div>
    </div>
  )
}

export default Frontend