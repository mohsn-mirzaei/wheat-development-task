import FavoritesList from "@/components/favorites-list";

export default function FavoritesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <FavoritesList />
    </main>
  );
}
