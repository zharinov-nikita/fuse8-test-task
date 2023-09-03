import { sharedUtilGenerateArrayWithUniqueIds } from '@shared'
import css from '../jokes-list/jokes-list.module.css'
import { S } from './jokes-loading.styled'
import { usePageJokesStore } from '../../jokes.store'

export const UiJokesLoading = () => {
    const { isLoading } = usePageJokesStore((s) => s)
    return (
        <>
            {isLoading && (
                <div className={css.listPrimary}>
                    {sharedUtilGenerateArrayWithUniqueIds(30).map(({ id }) => (
                        <div className={css.itemPrimary} key={id}>
                            <S.JokeSkeleton />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
