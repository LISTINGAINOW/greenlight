'use client';

import { useState, useRef } from 'react';
import { Upload, FileText, X, Loader2 } from 'lucide-react';

interface Props {
  onUpload: (script: { title: string; author: string; logline: string; pages: number; fileName: string }) => void;
  onClose: () => void;
}

export default function UploadScript({ onUpload, onClose }: Props) {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [logline, setLogline] = useState('');
  const [pages, setPages] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    setUploading(true);
    // Simulate PDF parsing (in production, we'd use pdf.js or server-side parsing)
    setTimeout(() => {
      setUploading(false);
      // Pre-fill with extracted data
      const nameWithoutExt = file.name.replace(/\.(pdf|fdx|fountain)$/i, '');
      if (!title) setTitle(nameWithoutExt);
    }, 1500);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !logline) return;
    onUpload({
      title,
      author: author || 'Unknown',
      logline,
      pages: parseInt(pages) || 120,
      fileName,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-midnight-600 bg-midnight-800 sm:rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-midnight-600 p-6">
          <h2 className="text-xl font-bold text-white">Upload Script</h2>
          <button type="button" onClick={onClose} className="rounded-full bg-midnight-700 p-2">
            <X className="h-5 w-5 text-midnight-300" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`mb-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition ${
              dragOver
                ? 'border-green-400 bg-green-500/10'
                : fileName
                ? 'border-cinema-500 bg-cinema-500/5'
                : 'border-midnight-500 hover:border-midnight-400'
            }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.fdx,.fountain,.txt"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            {uploading ? (
              <>
                <Loader2 className="h-10 w-10 animate-spin text-cinema-400" />
                <p className="mt-3 text-sm text-midnight-300">Parsing script...</p>
              </>
            ) : fileName ? (
              <>
                <FileText className="h-10 w-10 text-cinema-400" />
                <p className="mt-3 text-sm font-medium text-cinema-400">{fileName}</p>
                <p className="text-xs text-midnight-400">Click to replace</p>
              </>
            ) : (
              <>
                <Upload className="h-10 w-10 text-midnight-400" />
                <p className="mt-3 text-sm text-midnight-300">Drop a PDF, Final Draft, or Fountain file</p>
                <p className="text-xs text-midnight-500">or click to browse</p>
              </>
            )}
          </div>

          {/* Manual fields */}
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-midnight-400">
                Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="The Last Beekeeper"
                className="w-full rounded-xl border border-midnight-600 bg-midnight-700 px-4 py-3 text-white placeholder-midnight-400 outline-none transition focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-midnight-400">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Maria Chen"
                className="w-full rounded-xl border border-midnight-600 bg-midnight-700 px-4 py-3 text-white placeholder-midnight-400 outline-none transition focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-midnight-400">
                Logline *
              </label>
              <textarea
                value={logline}
                onChange={(e) => setLogline(e.target.value)}
                placeholder="A one-sentence summary of the script..."
                rows={3}
                className="w-full rounded-xl border border-midnight-600 bg-midnight-700 px-4 py-3 text-white placeholder-midnight-400 outline-none transition focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-midnight-400">
                Page count
              </label>
              <input
                type="number"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                placeholder="120"
                className="w-full rounded-xl border border-midnight-600 bg-midnight-700 px-4 py-3 text-white placeholder-midnight-400 outline-none transition focus:border-green-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!title || !logline}
            className="mt-6 w-full rounded-2xl bg-green-500 py-4 text-lg font-semibold text-white transition hover:bg-green-600 disabled:opacity-40 disabled:hover:bg-green-500"
          >
            Add to Stack
          </button>
        </form>
      </div>
    </div>
  );
}
