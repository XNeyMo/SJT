'use client';

import { useEffect, useState } from "react";
import Header from "@components/Header";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const hours = Array.from({ length: 15 }, (_, i) => i + 6); // 6am to 8pm

export default function Schedule() {
  const [schedule, setSchedule] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("schedule");
    try {
      const parsed = JSON.parse(stored ?? "{}");
      const combination = parsed.combination ?? [];
      console.log("Parsed combination:", combination);
      setSchedule(Array.isArray(combination) ? combination : []);
    } catch (e) {
      console.error("Error parsing schedule from localStorage:", e);
      setSchedule([]);
    }
  }, []);

  const getBlocksForHour = (day: string, hour: number) => {
    return schedule.filter((item) =>
      item.schedule?.some(
        (s: any) => s.day === day && s.startTime <= hour && s.endTime > hour
      )
    );
  };

  return (
    <main>
      <Header />

      <section className="h-auto p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Horario */}
        <Box sx={{ flex: 3, overflowX: "auto", display: "flex" }}>
          {/* Columna de Horas */}
          <Box sx={{ minWidth: 60, p: 1 }}>
            {/* Espacio superior vacío para alinear con días */}
            <Box sx={{ height: 40 }} />
            {hours.map((h) => (
              <Typography key={h} variant="body2" sx={{ height: 60 }}>
                {h}:00
              </Typography>
            ))}
          </Box>

          {/* Columnas por día */}
          {days.map((day) => (
            <Box key={day} sx={{ minWidth: 120, p: 1 }}>
              <Typography variant="subtitle2" align="center" sx={{ height: 40 }}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </Typography>
              <Divider />
              {hours.map((hour) => {
                const blocks = getBlocksForHour(day, hour);
                return (
                  <Box
                    key={`${day}-${hour}`}
                    sx={{
                      height: 60,
                      border: "1px solid #e0e0e0",
                      position: "relative",
                      bgcolor: blocks.length ? "#bbdefb" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {blocks.map((block, idx) => (
                      <Typography
                        key={idx}
                        variant="caption"
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#1976d2",
                          color: "#fff",
                          fontSize: "0.75rem",
                          px: 0.5,
                          m: 0.3,
                          borderRadius: 1,
                        }}
                      >
                        {block.name} ({block.id})
                      </Typography>
                    ))}
                  </Box>
                );
              })}
            </Box>
          ))}
        </Box>

        {/* Lista de materias */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Cursos Seleccionados
          </Typography>
          <List>
            {schedule.map((item, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={item.subjectName}
                  secondary={`Curso: ${item.code}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </section>
    </main>
  );
}
