import * as Icon from 'phosphor-react'
import * as S from './styles'

export const TodoList = () => {
  return (
    <S.TodoList>
      <S.ListItem>
        <S.ItemChekbox>
            <Icon.Check weight='bold' />
        </S.ItemChekbox>

        <S.ItemContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          maiores, repellat deleniti beatae nulla et saepe ut ipsum impedit,
          necessitatibus adipisci molestias error porro neque? Facere nobis quae
          voluptatem deserunt.
        </S.ItemContent>

        <S.ItemDeleteButton>
          <Icon.Trash />
        </S.ItemDeleteButton>
      </S.ListItem>

      <S.ListItem>
        <S.ItemChekbox check>
            <Icon.Check weight='bold' />
        </S.ItemChekbox>

        <S.ItemContent check>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          maiores, repellat deleniti beatae nulla et saepe ut ipsum impedit,
          necessitatibus adipisci molestias error porro neque? Facere nobis quae
          voluptatem deserunt.
        </S.ItemContent>

        <S.ItemDeleteButton>
          <Icon.Trash />
        </S.ItemDeleteButton>
      </S.ListItem>
    </S.TodoList>
  )
}
