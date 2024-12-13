"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import axios from "@/utils/axios";

import { useAppDispatch } from "@/store";

import HeaderAuthSection from "./auth-section";

import paths from "@/constants/paths";
import {
  FILTER_SIDE_STORAGE_KEY,
  FILTER_SIDE_DEFAULT_VALUE,
  LISTING_VIEW_MODE_STORAGE_KEY,
  LISTING_VIEW_MODE_DEFAULT_VALUE,
} from "@/constants/storage";
import {
  filterType,
  setFilterSide,
  listingViewModeType,
  setListingViewMode,
} from "@/store/storage/storageSlice";

// import axios from 'services/axiosConfig'; // Импортируем конфигурацию Axios

// export async function fetchData() {
//   try {
//     const response = await axios.get('/api/data');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

export default function Header() {
  const [isAuthenticated] = useState<boolean>(false);

  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage) {
      try {
        const filterSideStorage = localStorage.getItem(FILTER_SIDE_STORAGE_KEY);

        if (filterSideStorage) {
          dispatch(setFilterSide(filterSideStorage as filterType));
        } else {
          localStorage.setItem(
            FILTER_SIDE_STORAGE_KEY,
            FILTER_SIDE_DEFAULT_VALUE
          );
          dispatch(setFilterSide(FILTER_SIDE_DEFAULT_VALUE));
        }

        // -----------------------------------------------------------

        const listingViewModeStorage = localStorage.getItem(
          LISTING_VIEW_MODE_STORAGE_KEY
        );

        if (listingViewModeStorage) {
          dispatch(
            setListingViewMode(listingViewModeStorage as listingViewModeType)
          );
        } else {
          localStorage.setItem(
            LISTING_VIEW_MODE_STORAGE_KEY,
            LISTING_VIEW_MODE_DEFAULT_VALUE
          );
          dispatch(setListingViewMode(LISTING_VIEW_MODE_DEFAULT_VALUE));
        }

        // -------------------------------------------------------------
      } catch (err) {
        throw err;
      }
    }
  }, [dispatch]);

  useEffect(() => {
    // const getTodos = async () => {
    //   // const response = await fetch("/api/todos");
    //   const response = await fetch("https://job-for-you-backend.vercel.app/");
    //   // const response = await fetch("https://job-for-you-api.onrender.com/");
    //   // const todos = await response.json();
    //   const todos = await response.text();

    //   console.log("TODOS RESPONSE", todos);

    //   return todos;
    // };

    // getTodos();

    const doFetch = async () => {
      try {
        const response = await axios.get("");
        // return response.data;
      } catch (error) {
        throw error;
      }
    };

    doFetch();
  }, []);

  return (
    <header>
      <Link href={paths.home}></Link>
      <div>
        <nav>
          <ul>
            <li
              className={`${
                pathname === paths.jobs ? "menu-item--selected" : ""
              }`}
            >
              <Link href={paths.jobs}>Jobs</Link>
            </li>
            <li
              className={`${
                pathname === paths.employers ? "menu-item--selected" : ""
              }`}
            >
              <Link href={paths.employers}>Employers</Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions-block">
          {isAuthenticated ? null : <HeaderAuthSection />}
        </div>
      </div>
    </header>
  );
}
