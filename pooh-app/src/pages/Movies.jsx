import { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/data.js";
import SearchBox from "../components/SearchBox";
import GenreBox from "../components/GenreBox";

// ดึงหมวดหมู่หนังทั้งหมดแบบไม่ซ้ำกัน
const GENRES = [...new Set(movies.map((m) => m.genre))];

function Movies() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");

  // กรองหนังตามคำค้นหาและหมวดหมู่
  const q = query.trim().toLowerCase();
  const shown = movies.filter((m) => {
    const matchesSearch =
      q === "" ||
      m.title
        .toLowerCase()
        .split(" ")
        .some((word) => word.startsWith(q));
    const matchesGenre = genre === "all" || m.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">🎬 หนังทั้งหมด</h1>

      {/* เครื่องมือค้นหาและตัวเลือกหมวดหมู่ */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchBox query={query} setQuery={setQuery} />
        </div>
        <GenreBox genre={genre} onGenreChange={setGenre} genres={GENRES} />
      </div>

      {/* แสดงรายการหนัง */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((movie) => (
          <div
            key={movie.id}
            className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-lg font-bold">
              {movie.title} ({movie.year})
            </h3>
            <p className="mt-1 text-sm text-slate-500">ประเภท: {movie.genre}</p>

            <Link
              to={`/movies/${movie.id}`}
              className="mt-4 inline-block text-cyan-600 hover:underline"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>

      {/* กรณีค้นหาไม่พบ */}
      {shown.length === 0 && (
        <p className="text-center text-slate-500">ไม่พบรายการหนังที่ตรงเงื่อนไข</p>
      )}
    </div>
  );
}

export default Movies;