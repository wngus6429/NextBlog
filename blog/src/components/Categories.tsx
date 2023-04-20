type Props = {
  categories: string[];
  selected: string[];
  onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick임 }: Props) {
  return (
    <section>
      <h2>Category 카테고리 선택</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onClick임(category)}>
            {category} 카테고리
          </li>
        ))}
      </ul>
    </section>
  );
}
