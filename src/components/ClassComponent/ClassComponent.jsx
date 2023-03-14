import React from 'react'

import PropTypes from 'prop-types'
import style from './ClassComponent.module.css'

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 'Результат',
      userNumber: '',
      randomNum:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
      count: 0,
      isVisible: true,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((state) => ({
      count: state.count + 1,
    }))

    this.setState((state) => {
      if (!state.userNumber) {
        return state
      }

      if (state.userNumber > state.randomNum) {
        return {
          result: `${state.userNumber} больше загаданного`,
          userNumber: '',
        }
      }

      if (state.userNumber < state.randomNum) {
        return {
          result: `${state.userNumber} меньше загаданного`,
          userNumber: '',
        }
      }

      return {
        result: `${state.userNumber}, вы угадали загаданного число,
        попыток ${state.count}`,
        userNumber: '',
        isVisible: false,
      }
    })
  }

  handleRestart = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: -1,
      result: 'Результат',
      isVisible: true,
    }))
  }

  handleChange = (e) => {
    this.setState({ userNumber: e.target.value })
  }

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>
          <input
            className={style.input}
            type="number"
            id="user_number"
            onChange={this.handleChange}
            value={this.state.userNumber}
          />
          {this.state.isVisible ? (
            <button className={style.btn}>Угадать</button>
          ) : (
            <button className={style.btn} onClick={this.handleRestart}>
              Сыграть ещё
            </button>
          )}
        </form>
      </div>
    )
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
}
