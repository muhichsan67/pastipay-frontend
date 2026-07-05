import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { MerchantDataSource } from '../../data/datasources/MerchantDataSource';
import { SubmitMerchantFormUseCase } from '../../domain/usecases/SubmitMerchantFormUseCase';
import { MerchantRepositoryImpl } from '../../data/repositories/MerchantRepositoryImpl';

// Definisikan struktur data form
interface MerchantFormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<MerchantFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('');

  // Berikan tipe React.FormEvent pada parameter 'e'
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Alur inisialisasi Clean Architecture yang kokoh
      const dataSource = new MerchantDataSource();
      const repository = new MerchantRepositoryImpl(dataSource);
      const useCase = new SubmitMerchantFormUseCase(repository);
      
      const result = await useCase.execute(formData);
      setStatus(result.message);
    } catch (err: any) {
      setStatus(err.message || 'Terjadi kesalahan');
    }
  };

  return (
    <Layout>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="bg-white p-4 p-md-5 rounded-3xl shadow border" style={{ borderLeft: '5px solid var(--color-primary)' }}>
              <h2 className="fw-bold text-primary-custom mb-3">Formulir Merchant</h2>
              {status && <div className="alert alert-info">{status}</div>}
              
              {/* KOREKSI: Menghapus space-y-4 */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold small">Nama Lengkap *</label>
                  <input type="text" className="form-content form-control rounded-pill px-3 py-2 bg-light border-0" placeholder="Budi Santoso" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold small">Email Perusahaan *</label>
                  <input type="email" className="form-content form-control rounded-pill px-3 py-2 bg-light border-0" placeholder="name@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-bold small">Pesan</label>
                  <textarea className="form-content form-control rounded-3xl p-3 bg-light border-0" rows={4} placeholder="Ceritakan kebutuhan bisnis Anda..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                
                {/* KOREKSI: w-full diganti menjadi w-100 */}
                <button type="submit" className="btn bg-primary-custom text-white w-100 rounded-pill py-3 fw-bold">Kirim Permintaan Konsultasi</button>
              </form>
            </div>
          </div>
          
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h3 className="fw-bold text-primary-custom">Informasi Kontak</h3>
            <p className="text-muted">Gedung Treasury, Lantai 15, SCBD, Jakarta Selatan.</p>
            <div className="p-3 bg-light rounded-3xl mb-2"><strong>Email:</strong> support@pastipay.co.id</div>
            <div className="p-3 bg-light rounded-3xl"><strong>WhatsApp:</strong> +62 811-123-PASTI</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}