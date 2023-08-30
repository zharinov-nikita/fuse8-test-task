import { SharedUiCardComponent, SharedUiInputComponent } from '@shared'
import { S } from './jokes.styled'

export const PageJokes = () => {
    return (
        <S.PageJokes>
            <SharedUiInputComponent placeholder='Search jokes...' autoFocus />
            <SharedUiCardComponent
                title='Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.'
                hash='hxdulftcswqglp1-qe3nfw'
                date='01.05.2020'
            />
            <SharedUiCardComponent
                title='Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.'
                hash='hxdulftcswqglp1-qe3nfw'
                date='01.05.2020'
            />
            <SharedUiCardComponent
                title='Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.'
                hash='hxdulftcswqglp1-qe3nfw'
                date='01.05.2020'
            />
            <SharedUiCardComponent
                title='Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.'
                hash='hxdulftcswqglp1-qe3nfw'
                date='01.05.2020'
            />
        </S.PageJokes>
    )
}
